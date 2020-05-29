import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:vsbro/api/auth.dart';

class UploadView extends StatefulWidget {
  UploadView({Key key}) : super(key: key);

  final String title = "Upload Post";

  @override
  _UploadViewState createState() => _UploadViewState();
}

class _UploadViewState extends State<UploadView> {
  // Input controllers
  TextEditingController captionController = TextEditingController();

  File image;

  @override
  void dispose() {
    captionController.dispose();
    super.dispose();
  }

  upload(BuildContext context) {
    uploadPost((t) {
      if (t) {
        Navigator.pop(context);
      } else {
        setState(() {
          this.image = null;
          captionController.text = "Failed to upload file";
        });
      }
    }, image, captionController.text);
  }

  getImage() async {
    var tempImage =
        await new ImagePicker().getImage(source: ImageSource.gallery);

    setState(() {
      this.image = File(tempImage.path);
    });
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
            SizedBox(height: 40),
            Text(
                "IMPORTANT: Posting will fail without warning if you have not varified your email. Make sure to verify before posting. Also, there is a large delay after pressing \"post\". Please be patient."),
            SizedBox(height: 40),
            RaisedButton(
              child: Text("Upload Photo"),
              onPressed: () {
                getImage();
              },
            ),
            SizedBox(height: 20),
            TextField(
              controller: captionController,
              decoration: InputDecoration(hintText: "Caption (optional)"),
            ),
            RaisedButton(
              child: Text(
                  (image == null) ? "Upload an image before posting" : "Post"),
              onPressed: () {
                if (image != null) {
                  upload(context);
                }
              },
            ),
          ],
        ));
  }
}
