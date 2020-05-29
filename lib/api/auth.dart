import 'dart:convert';
import 'dart:io';

import 'package:flutter/widgets.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

// Make user sign up online: https://vsbro.co/register

var login_route = "https://api.vsbro.co/users/sign_in";

// {email:"email", password:"password"}

void isUserAuthenticated(ValueChanged<bool> callback) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();

  var authedonce = prefs.getBool("authenticated");
  var authnotexp = prefs.getInt("expiry");
  var authed = authedonce != null &&
      authedonce &&
      authnotexp != null &&
      authnotexp < new DateTime.now().millisecondsSinceEpoch;
  print("auth: ${authed}");
  callback(authed);
}

void authenticate(
    ValueChanged<bool> callback, String email, String password) async {
  print("Auth called");

  // Make API call
  var response = await http.post("https://api.vsbro.co/users/sign_in",
      body: json.encode({"email": email, "password": password}));

  print(response.statusCode);

  // If the call is success, continue
  if (response.statusCode == 200) {
    // Break up data
    var plist = response.body.split(".");
    var authType = json.decode(utf8.decode(base64.decode(plist[0])));
    var expiry = json.decode(utf8.decode(base64.decode(plist[1])));
    String token = response.body;

    print(expiry);

    // Set prefs
    SharedPreferences prefs = await SharedPreferences.getInstance();

    prefs.setBool("authenticated", true);
    prefs.setString("token", token);
    prefs.setInt("expiry", expiry["exp"]);
    prefs.setInt("userid", int.parse(expiry["sub"]));

    callback(true);
  } else {
    callback(false);
  }
}

void getFriendPage(
    ValueChanged<List<dynamic>> callback, int page_number) async {
  // Get token
  SharedPreferences prefs = await SharedPreferences.getInstance();
  var token = prefs.getString("token");
  if (token == null) {
    token = "";
  }
  print(token);

  // Make API call
  var response = await http.get(
      "https://api.vsbro.co/api/friend_feed" + '?page=${page_number}',
      headers: {HttpHeaders.authorizationHeader: "bearer ${token}"});

  // If the api call worked, make a callback call
  if (response.statusCode == 200) {
    callback(json.decode(utf8.decode(response.bodyBytes)));
  }
}

void becomeFriendWith(num userID) async {
  // Get token
  SharedPreferences prefs = await SharedPreferences.getInstance();
  var token = prefs.getString("token");
  if (token == null) {
    token = "";
  }
  print(token);

  // Make API call
  var response = await http.post(
      "https://api.vsbro.co/api/friendships/create/${userID}",
      headers: {HttpHeaders.authorizationHeader: "bearer ${token}"});

  print(response.statusCode);
}

void stopBeingFriendWith(num userID) async {
  // Get token
  SharedPreferences prefs = await SharedPreferences.getInstance();
  var token = prefs.getString("token");
  if (token == null) {
    token = "";
  }
  print(token);

  // Make API call
  var response = await http.post(
      "https://api.vsbro.co/api/friendships/delete/${userID}",
      headers: {HttpHeaders.authorizationHeader: "bearer ${token}"});
}

void authUpvotePost(num postID) async {
  // Get token
  SharedPreferences prefs = await SharedPreferences.getInstance();
  var token = prefs.getString("token");
  if (token == null) {
    token = "";
  }
  print(token);

  // Make API call
  var response = await http.post(
      "https://api.vsbro.co/api/posts/upvote/${postID}",
      headers: {HttpHeaders.authorizationHeader: "bearer ${token}"});
}

void checkUserIsMe(ValueChanged<bool> callback, num userID) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  var myuser = prefs.getInt("userid");

  if (myuser == null) {
    myuser = -1;
  }

  callback(myuser == userID);
}

void readOwnUserID(ValueChanged<num> callback) async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  var myuser = prefs.getInt("userid");

  if (myuser == null) {
    myuser = -1;
  }

  callback(myuser);
}

var myID = -1;
void preloadMyID() {
  readOwnUserID((value) {
    myID = value;
  });
}

void asyncPreloadMyID() async {
  SharedPreferences prefs = await SharedPreferences.getInstance();
  var myuser = prefs.getInt("userid");

  if (myuser == null) {
    myuser = -1;
  }

  myID = myuser;
}

num getMyID() {
  return myID;
}

// Posting a photo
// POST https://api.vsbro.co/api/posts/get_post_url {"caption":"text"}
// PUT https://vsbro-photos-prod.s3.amazonaws.com/users/116855/BToGVohzyUdTcuuinTQmQISBvFETyNPo.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXQCTSMQQGFIGPC6N%2F20200529%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200529T155354Z&X-Amz-Expires=900&X-Amz-SignedHeaders=content-type%3Bhost&X-Amz-Signature=5770951faff8d3440044c20d345cfbfc25700feccbba9276fbff4b5ceaacc8c6
// POST https://api.vsbro.co/api/posts/submit {"caption":"text","filename":"url from past 2 requests"}

void uploadPost(ValueChanged<bool> callback, File f, String caption) async {
  // Get token
  SharedPreferences prefs = await SharedPreferences.getInstance();
  var token = prefs.getString("token");
  if (token == null) {
    token = "";
  }
  print(token);

  // Post the caption
  var response = await http.post("https://api.vsbro.co/api/posts/get_post_url",
      body: json.encode({"caption": caption}),
      headers: {HttpHeaders.authorizationHeader: "bearer ${token}"});

  if (response.statusCode != 200) {
    callback(false);
    return;
  }

  // Parse out the response
  Map<String, dynamic> host = json.decode(response.body);

  // Post the pic
  var response2 = await http.put(host["signed_url"],
      headers: {HttpHeaders.contentTypeHeader: "image/jpg"},
      body: await f.readAsBytes());

  if (response2.statusCode != 200) {
    print("Failed to upload image");
    callback(false);
    return;
  }

  // Finalize the process
  var response3 = await http.post("https://api.vsbro.co/api/posts/submit",
      body: json.encode({"caption": caption, "filename": host["filename"]}),
      headers: {HttpHeaders.authorizationHeader: "bearer ${token}"});

  if (response3.statusCode != 200) {
    callback(false);
    return;
  }

  callback(true);
}
