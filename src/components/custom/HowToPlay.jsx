import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const HowToPlay = () => {
  return (
    <div className="max-w-4xl mx-auto mt-16 mb-5 px-4">
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold mb-2">How to Play</h2>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal ml-5 space-y-2">
            <li>
              Select a difficulty level (Easy, Medium, or Hard) to start the
              quiz.
            </li>
            <li>
              You will be presented with 10 random questions based on the chosen
              difficulty.
            </li>
            <li>Each question has a time limit of 10 seconds.</li>
            <li>
              Select the correct answer from the given options before the timer
              runs out.
            </li>
            <li>
              Your score will be displayed at the end of the quiz along with the
              correct answers.
            </li>
            <li>
              Click on &quot;Play Again&quot; to start a new quiz with a
              different set of questions.
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
};

export default HowToPlay;
