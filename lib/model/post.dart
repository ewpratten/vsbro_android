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

  Post(Map<String, dynamic> json) {
    this.pictureURL = json["Picture"];
    this.postID = json["PostID"];
    this.caption = json["caption"];
    this.username = json["User"]["username"];
    this.userID = json["User"]["id"];
  }

  Padding getCard(BuildContext context) {
    return new Padding(
        padding: const EdgeInsets.all(8.0),
        child: Card(
            child: Column(
          children: <Widget>[
            Center(
                child: Text(
              this.username,
              style: TextStyle(fontSize: 40),
            )),
            Image.network(this.pictureURL),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Flexible(
                  child: Text(
                    this.caption,
                    style: TextStyle(fontSize: 25),
                  ),
                ),
                CircleAvatar(
                    radius: 20,
                    backgroundColor: Color(0xff94d500),
                    child: IconButton(
                      icon: Icon(Icons.plus_one),
                      onPressed: () {
                        if (isUserAuthenticated()) {
                          upvotePost(this.postID);
                        } else {
                          Navigator.push(
                            context,
                            MaterialPageRoute(builder: (context) => AuthView()),
                          );
                        }
                      },
                    ))
              ],
            )
          ],
        )));
  }

  void upvote() {}
}
