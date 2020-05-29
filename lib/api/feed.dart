import 'dart:convert';

import 'package:flutter/widgets.dart';
import 'package:http/http.dart' as http;

var feed_route_base = "https://api.vsbro.co/home"; // ?page=0

void getFeedPage(
    ValueChanged<List<dynamic>> callback, int page_number) async {
  // Make API call
  var response = await http.get(feed_route_base + '?page=${page_number}');

  // If the api call worked, make a callback call
  if (response.statusCode == 200) {
    callback(json.decode(utf8.decode(response.bodyBytes)));
  }
}
