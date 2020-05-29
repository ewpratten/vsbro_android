import 'package:flutter/material.dart';

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

  Padding getCard() {
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
              children: <Widget>[
                Flexible(
                  child: Text(
                    this.caption,
                    style: TextStyle(fontSize: 25),
                  ),
                ),
                // IconButton(icon: Icon(Icons.plus_one), onPressed: (){
                //   // TODO: Upvote post here
                // },)
              ],
            )
          ],
        )));
  }

  void upvote(){

  }


}
