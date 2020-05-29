import 'package:flutter/material.dart';
import 'package:vsbro/api/auth.dart';
import 'package:vsbro/api/misc.dart';
import 'package:vsbro/views/authview.dart';

class Post {
  // Post data
  String pictureURL;
  String username;
  num userID;
  num postID;
  String caption;
  String profilePicURL;

  Post(Map<String, dynamic> json) {
    this.pictureURL = json["Picture"];
    this.postID = json["PostID"];
    this.caption = json["caption"];
    this.username = json["User"]["username"];
    this.userID = json["User"]["id"];
    this.profilePicURL =
        "https://d8xay7agdbr1p.cloudfront.net/users/${userID}/" +
            json["User"]["picture"];
  }

  void upvote() {}
}
