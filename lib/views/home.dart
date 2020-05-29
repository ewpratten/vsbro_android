import 'dart:async';

import 'package:flutter/material.dart';
import 'package:vsbro/api/feed.dart';
import 'package:vsbro/model/post.dart';
import 'package:vsbro/views/postitem.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  var pageNum = 0;

  List<Post> posts = new List();

  void loadNextPage() {
    getFeedPage(this.updateFeed, this.pageNum);
    this.pageNum++;
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

    // // Add back and forward buttons
    // cards.add(new Row(
    //   mainAxisAlignment: MainAxisAlignment.spaceEvenly,
    //   children: <Widget>[
    //     RaisedButton(
    //       child: Text("More"),
    //       onPressed: () {
    //         this.pageNum++;
    //         getFeedPage(this.updateFeed, this.pageNum);
    //       },
    //     )
    //   ],
    // ));

    return Scaffold(
      appBar: AppBar(
        title: Text("Feeds"),
        centerTitle: true,
        actions: <Widget>[
          IconButton(
            icon: Icon(
              Icons.filter_list,
            ),
            onPressed: () {},
          ),
        ],
      ),

      body: RefreshIndicator(
        onRefresh: () {
          getFeedPage(this.updateFeed, this.pageNum);

          // Dummy code because callbacks FTW
          var c = new Completer();
          c.complete(1);
          return c.future;
        },
        child: ListView.builder(
          padding: EdgeInsets.symmetric(horizontal: 20),
          itemCount: posts.length,
          itemBuilder: (BuildContext context, int index) {
            Post post = this.posts[index];
            return PostItem(
              img: post.pictureURL,
              name: post.username,
              dp: "https://pbs.twimg.com/profile_images/1168699652717383680/cybUv8zv_400x400.jpg",
            );
          },
        ),
      ),
      // body: PostItem(
      //   img: "",
      //   name: "ewpratten",
      //   dp: "post['dp']",
      // ),
      floatingActionButton: FloatingActionButton(
        child: Icon(
          Icons.add,
        ),
        onPressed: () {},
      ),
    );
  }
}
