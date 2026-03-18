import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Principal "mo:core/Principal";
import Int "mo:core/Int";

actor {
  let adminPrincipal = Principal.fromText("2vxsx-fae");

  type Submission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module Submission {
    public func compare(entry1 : Submission, entry2 : Submission) : Order.Order {
      Int.compare(entry1.timestamp, entry2.timestamp);
    };
  };

  let submissions = Map.empty<Int, Submission>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let submission : Submission = {
      name;
      email;
      message;
      timestamp = 1;
    };
    submissions.add(submission.timestamp, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    if (caller != adminPrincipal) {
      Runtime.trap("Only the admin can access this function");
    };
    submissions.values().toArray().sort();
  };
};
