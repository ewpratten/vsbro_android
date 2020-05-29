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
    callback(json.decode(response.body));
  }
}

void becomeFriendWith(num userID) {}

void authUpvotePost(num postID) async {
  // Get token
  SharedPreferences prefs = await SharedPreferences.getInstance();
  var token = prefs.getString("token");
  if (token == null) {
    token = "";
  }
  print(token);

  // Make API call
  var response = await http.get(
      "https://api.vsbro.co/api/posts/upvote/${postID}",
      headers: {HttpHeaders.authorizationHeader: "bearer ${token}"});
}
