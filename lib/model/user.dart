import 'package:vsbro/model/post.dart';

class User {
  num userID;
  String username;
  String email;
  String bio;
  String profilePicURL;
  bool isBro;

  List<Post> posts = new List();

  User(Map<String, dynamic> json) {
    this.userID = json["id"];
    this.username = json["username"];
    this.email = json["email"];
    this.bio = json["bio"];
    this.profilePicURL = json["picture"];
    this.isBro = json["is_current_friends_with"];

    // Get posts
    for (Map<String, dynamic> post in json["Posts"]) {
      this.posts.add(new Post(post));
    }
  }
}
