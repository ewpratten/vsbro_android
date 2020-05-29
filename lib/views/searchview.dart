import 'dart:async';

import 'package:flutter/material.dart';
import 'package:vsbro/api/feed.dart';
import 'package:vsbro/commondrawer.dart';
import 'package:vsbro/model/post.dart';

class SearchView extends StatefulWidget {
  SearchView({Key key}) : super(key: key);

  final String title = "Feed";

  @override
  _SearchViewState createState() => _SearchViewState();
}

class _SearchViewState extends State<SearchView> {
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

  List<Widget> getContentCards(BuildContext context) {
    List<Widget> cards = new List();

    for (Post post in this.posts) {
      cards.add(post.getCard(context));
    }

    return cards;
  }

  initState() {
    this.loadNextPage();
  }

  @override
  Widget build(BuildContext context) {
    // Make cards list
    var cards = this.getContentCards(context);

    // Add back and forward buttons
    cards.add(new Row(
       mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: <Widget>[
        // RaisedButton(
        //   child: Text("Previous"),
        //   onPressed: () {
        //     if (this.pageNum > 0) {
        //       this.pageNum--;
        //       getFeedPage(this.updateFeed, this.pageNum);
        //     }
        //   },
        // ),
        RaisedButton(
          child: Text("More"),
          onPressed: () {
            this.pageNum++;
            getFeedPage(this.updateFeed, this.pageNum);
          },
        )
      ],
    ));

    return Scaffold(
      drawer: buildDrawer(context),
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: RefreshIndicator(
            onRefresh: () {
              getFeedPage(this.updateFeed, this.pageNum);

              // Dummy code because callbacks FTW
              var c = new Completer();
              c.complete(1);
              return c.future;
            },
            child: ListView(children: cards)));
  }
}
