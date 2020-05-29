import 'package:flutter/material.dart';
// import 'dart:html' as html;

class AuthView extends StatefulWidget {
  AuthView({Key key}) : super(key: key);

  final String title = "Auth";

  @override
  _AuthViewState createState() => _AuthViewState();
}

class _AuthViewState extends State<AuthView> {
  // Input controllers
  TextEditingController emailController = TextEditingController();
  TextEditingController passwordController = TextEditingController();

  @override
  void dispose() {
    emailController.dispose();
    passwordController.dispose();
    super.dispose();
  }

  void tryLogin(BuildContext context) {
    var email = emailController.text;
    var password = passwordController.text;

    var success = false;

    if (success) {
      Navigator.pop(context);
    } else {
      emailController.text = "Invalid Login. Try again";
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: Icon(Icons.arrow_back),
            onPressed: () {
              Navigator.pop(context);
            },
          ),
          title: Text(widget.title),
          centerTitle: true,
        ),
        body: ListView(
          children: <Widget>[
            TextField(
              controller: emailController,
              decoration: InputDecoration(hintText: "email"),
            ),
            TextField(
              controller: passwordController,
              decoration: InputDecoration(hintText: "password"),
              obscureText: true,
            ),
            RaisedButton(
              child: Text("Sign In"),
              onPressed: () {
                this.tryLogin(context);
              },
            ),
            RaisedButton(
              child: Text("Sign Up"),
              onPressed: () {
                // html.window.open("https://vsbro.co/register", "VSBRO register");
              },
            ),
          ],
        ));
  }
}
