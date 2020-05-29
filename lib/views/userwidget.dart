import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:vsbro/api/auth.dart';
import 'package:vsbro/api/user.dart';
import 'package:vsbro/model/post.dart';
import 'package:vsbro/model/user.dart';
import 'package:vsbro/views/authview.dart';
import 'package:vsbro/views/postitem.dart';

class UserWidget extends StatefulWidget {
  final num userID;
  User user;
  bool isBro = false;
  bool isMe = false;

  final String title = "Profile";

  UserWidget({Key key, @required this.userID}) : super(key: key);
  @override
  _UserWidgetState createState() => _UserWidgetState();
}

class _UserWidgetState extends State<UserWidget> {
  @override
  void initState() {
    print(widget.userID);

    // set the "is me" tracker
    checkUserIsMe((t) {
      print(t);
      setState(() {
        widget.isMe = t;
      });
    }, widget.userID);

    // Load user info
    getUserPage((json) {
      print(json);
      setState(() {
        widget.user = new User(json);
      });
    }, widget.userID);
  }

  _launchPersonalProfile() async {
    var url = "https://vsbro.co/${widget.user.username}";
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    if (widget.user != null) {
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
          body: SingleChildScrollView(
            padding: EdgeInsets.symmetric(horizontal: 10),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                SizedBox(height: 40),
                CircleAvatar(
                  backgroundImage: NetworkImage(
                    "${widget.user.profilePicURL}",
                  ),
                  radius: 50,
                ),
                SizedBox(height: 10),
                Text(
                  widget.user.username,
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 22,
                  ),
                ),
                SizedBox(height: 3),
                Text(
                  widget.user.bio,
                  style: TextStyle(),
                ),
                SizedBox(height: 20),
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: <Widget>[
                    SizedBox(width: 10),
                    FlatButton(
                      child: Icon(
                        (widget.isMe)
                            ? Icons.edit
                            : ((widget.isBro) ? Icons.remove : Icons.add),
                        color: Colors.white,
                      ),
                      color: Theme.of(context).accentColor,
                      onPressed: () {
                        if (widget.isMe) {
                          _launchPersonalProfile();
                        } else {
                          isUserAuthenticated((t) {
                            if (t) {
                              if (widget.isBro) {
                                stopBeingFriendWith(widget.userID);
                              } else {
                                becomeFriendWith(widget.userID);
                              }
                            } else {
                              Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (coontext) => AuthView()));
                            }
                          });
                        }
                      },
                    ),
                  ],
                ),
                SizedBox(height: 20),
                ListView.builder(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  padding: EdgeInsets.symmetric(horizontal: 20),
                  itemCount: widget.user.posts.length,
                  itemBuilder: (BuildContext context, int index) {
                    Post post = widget.user.posts[index];
                    return PostItem(post: post, doNotAllowProfileOpen: true,);
                  },
                ),
              ],
            ),
          ));
    } else {
      return new Scaffold(
        appBar: AppBar(
          title: Text("Loading Profile..."),
          centerTitle: true,
        ),
      );
    }
  }
}
