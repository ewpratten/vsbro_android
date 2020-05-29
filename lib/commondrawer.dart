import 'package:flutter/material.dart';
import 'package:vsbro/views/aboutview.dart';
// import 'package:vsbro/views/feedview.dart';

Drawer buildDrawer(BuildContext context) {
  return new Drawer(
    child: ListView(
      padding: EdgeInsets.zero,
      children: <Widget>[
        // DrawerHeader(
        //   child: Text(
        //     'Unofficial VSBRO',
        //     style: TextStyle(color: Colors.white),
        //   ),
        //   decoration: BoxDecoration(
        //     color: Colors.blue,
        //   ),
        // ),
        // ListTile(
        //   title: Text('Feed'),
        //   onTap: () {
        //     Navigator.push(
        //       context,
        //       MaterialPageRoute(builder: (context) => FeedView()),
        //     );
        //   },
        // ),
        // ListTile(
        //   title: Text('Search'),
        //   onTap: () {},
        // ),
        // ListTile(
        //   title: Text('Other'),
        //   onTap: () {},
        // ),
        // ListTile(
        //   title: Text('About'),
        //   onTap: () {
        //     Navigator.push(
        //       context,
        //       MaterialPageRoute(builder: (context) => AboutView()),
        //     );
        //   },
        // ),
      ],
    ),
  );
}
