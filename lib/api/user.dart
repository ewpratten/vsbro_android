import 'dart:convert';
import 'dart:io';

import 'package:flutter/widgets.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';
import 'package:vsbro/api/auth.dart';

var user_route_base = "https://api.vsbro.co/user/";
// /<user> ?current_user_id=undefined

void getUserPage(
    ValueChanged<Map<String, dynamic>> callback, num userID) async {
  await asyncPreloadMyID();
  var currentuid = getMyID();

  // Get token
  SharedPreferences prefs = await SharedPreferences.getInstance();
  var token = prefs.getString("token");
  if (token == null) {
    token = "";
  }
  print(token);

  // Make API call
  var response = await http.get(
      user_route_base + '${userID}?current_user_id=${currentuid}',
      headers: {HttpHeaders.authorizationHeader: "bearer ${token}"});

  // If the api call worked, make a callback call
  if (response.statusCode == 200) {
    callback(json.decode(utf8.decode(response.bodyBytes)));
  }
}
