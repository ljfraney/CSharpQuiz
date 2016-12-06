# CSharpQuiz
C# Quiz Alexa Skill

This Alexa Skill is designed to help teach students, or anyone interested in C#, .Net, and Object Oriented Programming. The user is first asked how many questions he or she would like to answer. The questions are asked in a multiple-choice format, with each question having four answer choices, and one correct answer. The number of correct responses is tracked throughout the game, and an overall score is given at the end. Questions are chosen in a random order, and answer choices are shuffled each time a question is asked. At the time of initial release, there were 50 questions in the question bank.

This code is originally a modification of the Reindeer Games Alexa trivia game tutorial at https://developer.amazon.com/public/community/post/TxDJWS16KUPVKO/New-Alexa-Skills-Kit-Template-Build-a-Trivia-Skill-in-under-an-Hour. It builds on this tutorial by allowing the user to specify how many questions they want to answer.

The index.js file contains the code for the AWS Lambda Function. All of the skill logic exists in this file.

The intentSchema.json and sampleUtterances.txt files must be manually pasted into the ASK portal.

THe package.json file defines development dependencies on grunt and grunt-aws-lambda. Together, these packages assist with the deployment of the AWS Lambda Function via the AWS Command Line Interface.