import 'dart:convert';

import 'package:flutter/widgets.dart';
import 'package:http/http.dart' as http;

var user_route_base = "https://api.vsbro.co/user_with_name/";
// /<user> ?current_user_id=undefined

void getUserPage(
    ValueChanged<Map<String, dynamic>> callback, String username) async {
  // Make API call
  var response = await http.get(user_route_base + '{username}');

  // If the api call worked, make a callback call
  if (response.statusCode == 200) {
    callback(json.decode(response.body));
  }
}
