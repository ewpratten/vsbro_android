import 'package:flutter/material.dart';
import 'package:vsbro/api/auth.dart';
import 'package:vsbro/model/post.dart';
import 'package:vsbro/views/authview.dart';

class PostItem extends StatefulWidget {
  final Post post;

  PostItem({Key key, @required this.post}) : super(key: key);
  @override
  _PostItemState createState() => _PostItemState();
}

class _PostItemState extends State<PostItem> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 5),
      child: InkWell(
        child: Column(
          children: <Widget>[
            ListTile(
              leading: CircleAvatar(
                backgroundImage: NetworkImage(
                  "${widget.post.profilePicURL}",
                ),
              ),
              contentPadding: EdgeInsets.all(0),
              title: Text(
                "${widget.post.username}",
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                ),
              ),
              trailing: IconButton(
                  icon: Icon(Icons.thumb_up),
                  onPressed: () {
                    // If we have auth, make an upvote call

                    isUserAuthenticated((t) {
                      if (t) {
                        widget.post.upvote();
                      } else {
                        Navigator.push(
                            context,
                            MaterialPageRoute(
                                builder: (coontext) => AuthView()));
                      }
                    });
                  }),
            ),
            new Align(
              alignment: Alignment.center,
              child: Text(
                '\"${widget.post.caption}\"',
                style: TextStyle(
                    fontWeight: FontWeight.w600, fontStyle: FontStyle.italic),
              ),
            ),
            Image.network(
              "${widget.post.pictureURL}",
              width: MediaQuery.of(context).size.width,
              fit: BoxFit.cover,
            ),
          ],
        ),
        onTap: () {},
      ),
    );
  }
}
