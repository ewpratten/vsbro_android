import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import 'package:vsbro/api/auth.dart';
import 'package:vsbro/views/authview.dart';
import 'package:vsbro/views/userwidget.dart';

class MeView extends StatefulWidget {
  MeView({Key key}) : super(key: key);
  @override
  _MeViewtState createState() => _MeViewtState();
}

class _MeViewtState extends State<MeView> {
  bool shouldAuth = false;
  num userID = 0;

  initState() {
    super.initState();

    readOwnUserID((u) {
      setState(() {
        shouldAuth = u == -1;
        userID = u;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
      return new UserWidget(userID: userID);
  }
}
