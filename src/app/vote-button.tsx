'use client';

import { useState } from "react";

export default function VoteButton() {
  const [votes, setVotes] = useState(0);

  function upVote() {
    setVotes(votes + 1);
  }
  function downVote() {
    setVotes(votes - 1);
  }

  return (
    <div>
        <h3>Number of Votes: [{votes}]</h3>
        <button onClick={upVote}>Up Vote</button> | <button onClick={downVote}>Down Vote</button>
    </div>
  )
};