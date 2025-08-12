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
        <h3 className="climbing-h3">Number of Votes: [{votes}]</h3>
        <div className="mt-6 flex gap-4">
          <button 
          onClick={upVote}
          className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'>
            Up Vote</button>
          <button 
          onClick={downVote}
          className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'>
            Down Vote</button>
        </div>
    </div>
  )
};