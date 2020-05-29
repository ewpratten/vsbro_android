import 'dart:convert';

import 'package:flutter/widgets.dart';
import 'package:http/http.dart' as http;

var user_route_base = "https://api.vsbro.co/user/";
// /<user> ?current_user_id=undefined

void getUserPage(
    ValueChanged<Map<String, dynamic>> callback, num userID) async {
  // Make API call
  var response = await http.get(user_route_base + '${userID}');

  print(response.statusCode);
  print(user_route_base + '{userID}');

  // If the api call worked, make a callback call
  if (response.statusCode == 200) {
    callback(json.decode(response.body));
  }
}
