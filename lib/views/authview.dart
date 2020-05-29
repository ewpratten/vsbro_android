import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:vsbro/api/auth.dart';

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

    authenticate((success) {
      if (success) {
        Navigator.pop(context);
      } else {
        emailController.text = "Invalid Login. Try again";
      }
    }, email, password);
  }

  launchRegisterURL() async {
    const url = "https://vsbro.co/register";
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
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
            RaisedButton(child: Text("Sign Up"), onPressed: launchRegisterURL),
          ],
        ));
  }
}
