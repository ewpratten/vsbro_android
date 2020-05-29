import 'package:flutter/material.dart';
import 'package:vsbro/commondrawer.dart';

class AuthView extends StatefulWidget {
  AuthView({Key key}) : super(key: key);

  final String title = "Auth";

  @override
  _AuthViewState createState() => _AuthViewState();
}

class _AuthViewState extends State<AuthView> {
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
                  "Auth is WIP")
            ],
            
          ),
        );
  }
}
