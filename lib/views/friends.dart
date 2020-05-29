import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:vsbro/api/auth.dart';
import 'package:vsbro/model/post.dart';
import 'package:vsbro/views/postitem.dart';

class Friends extends StatefulWidget {
  @override
  _FriendsState createState() => _FriendsState();
}

class _FriendsState extends State<Friends> {
var pageNum = 0;

  List<Post> posts = new List();

  void loadNextPage() {
    getFriendPage(this.updateFeed, this.pageNum);
    this.pageNum++;

    // TODO: Test post
    // addTestPosts();
  }

  void updateFeed(List<dynamic> response) {
    setState(() {
      // Do magic here bro
      print(response);

      for (var post in response) {
        this.posts.add(new Post(post));
      }
    });
  }

  initState() {
    this.loadNextPage();
  }

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text("Feed"),
        centerTitle: true,
      ),
      body: RefreshIndicator(
        onRefresh: () {
          // Dummy code because callbacks FTW
          var c = new Completer();

          getFriendPage((json) {
            c.complete(1);
            this.updateFeed(json);
          }, this.pageNum);

          return c.future;
        },
        child: ListView.builder(
          padding: EdgeInsets.symmetric(horizontal: 20),
          itemCount: this.posts.length + 1,
          itemBuilder: (BuildContext context, int index) {
            if (index < this.posts.length) {
              Post post = this.posts[index];
              return PostItem(
                  post:post);
            } else {
              return RaisedButton(
                child: Text("More"),
                onPressed: () {
                  this.pageNum++;
                  getFriendPage(this.updateFeed, this.pageNum);
                },
              );
            }
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(
          Icons.add,
        ),
        onPressed: () {},
      ),
    );
  }
}