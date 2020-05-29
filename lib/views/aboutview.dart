import 'package:flutter/material.dart';
import 'package:vsbro/commondrawer.dart';

class AboutView extends StatefulWidget {
  AboutView({Key key}) : super(key: key);

  final String title = "About";

  @override
  _AboutViewState createState() => _AboutViewState();
}

class _AboutViewState extends State<AboutView> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        drawer: buildDrawer(context),
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: 
           Wrap(
            children: <Widget>[
              Text(
                  "This app is a unofficial port of the popular VSBRO app for IOS. It hooks into the same API, and has most of the same features. This is NOT an official app. Please do not go bugging the VSBRO developers about issues specific to this app. That being said, please go show them some love for creating this cool platform"),
                  Text("Finally: I, Evan Pratten, thank you for trying out one of my apps.")
            ],
            
          ),
        );
  }
}
