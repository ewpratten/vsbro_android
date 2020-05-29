import 'dart:async';

import 'package:flutter/material.dart';
import 'package:vsbro/api/auth.dart';
import 'package:vsbro/api/feed.dart';
import 'package:vsbro/model/post.dart';
import 'package:vsbro/views/authview.dart';
import 'package:vsbro/views/postitem.dart';
import 'package:vsbro/views/uploadview.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  var pageNum = 0;

  List<Post> posts = new List();

  void addTestPosts() {
    this.posts.add(new Post({
          "Picture":
              "https://images.unsplash.com/photo-1590721014738-fb5187b4051a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          "caption": "Look at my fish!",
          "PostID": 0,
          "User": {
            "username": "ewpratten",
            "id": 0,
            "picture":
                "https://pbs.twimg.com/profile_images/1168699652717383680/cybUv8zv_400x400.jpg"
          }
        }));

    this.posts.add(new Post({
          "Picture":
              "https://images.unsplash.com/photo-1560936165-7a7b77325c2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          "caption":
              "I talk too much. Look at me talking. Words, words, words!!",
          "PostID": 1,
          "User": {
            "username": "downunder",
            "id": 1,
            "picture":
                "https://pbs.twimg.com/profile_images/1168699652717383680/cybUv8zv_400x400.jpg"
          }
        }));
  }

  void loadNextPage() {
    getFeedPage(this.updateFeed, this.pageNum);
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

          getFeedPage((json) {
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
              return PostItem(post: post);
            } else {
              return RaisedButton(
                child: Text("More"),
                onPressed: () {
                  this.pageNum++;
                  getFeedPage(this.updateFeed, this.pageNum);
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
        onPressed: () {
          isUserAuthenticated((t) {
            if (t) {
                Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (coontext) => UploadView()));
            } else {
              Navigator.push(context,
                  MaterialPageRoute(builder: (coontext) => AuthView()));
            }
          });
        },
      ),
    );
  }
}
