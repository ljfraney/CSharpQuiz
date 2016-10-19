'use strict';

//When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
//Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
var questions = [
    {
        "To create a base class that can be inherited from, but cannot be instantiated itself, this keyword should be used. ": [
            "abstract", "private", "protected", "override"
        ]
    },
    {
        "This keyword is used to indicate that a class member must define an implementation in any derived class. ": [
            "abstract", "private", "protected", "override"
        ]
    },
    {
        "This keyword is used to access members of the parent class from within a derived class. ": [
            "base", "parent", "root", "inherited"
        ]
    },
    {
        "This keyword is used to terminate the closest enclosing loop or switch statement in which it appears. ": [
            "break", "end", "escape", "exit"
        ]
    },
    {
        "This statement can be used to handle any exceptions that may have occurred during a preceeding try statement. ": [
            "catch", "handle", "execute", "terminate"
        ]
    },
    {
        "This statement can follow a try statement to run a block of code even if an unhandled exception is thrown. ": [
            "finally", "always", "done", "catch"
        ]
    },
    {
        "This statement passes control to the next iteration of the enclosing loop in which it appears. ": [
            "continue", "break", "next", "return"
        ]
    },
    {
        "This keyword is used to declare a distinct type that consists of a set of named constants. ": [
            "enum", "array", "list", "dictionary"
        ]
    },
    {
        "This type of loop repeats a group of embedded statements for every element in an array or an object collection that implements the I Enumerable interface. ": [
            "for each", "for", "each", "while"
        ]
    },
    {
        "Typically used to encapsulate small groups of related variables, this is similar to a class, but is a value type rather than a reference type. ": [
            "struct", "object", "array", "enum"
        ]
    },
    {
        "This contextual keyword can be used when passing parameter to a method by reference, requiring the called method to assign a value before the method returns. ": [
            "out", "ref", "ByVal", "var"
        ]
    },
    {
        "Values for this type of variable are stored directly in the stack. ": [
            "value type", "reference type", "object type", "class type"
        ]
    },
    {
        "Values for this type of variable are stored in the heap. Only a pointer to the value is stored in the stack. ": [
            "reference type", "value type", "struct type", "abstract type"
        ]
    },
    {
        "Often described as a contract, this contains only the signatures of methods, properties, events or indexers. It cannot contain implementations of them. ": [
            "an interface", "an abstract class", "a static class", "a partial class"
        ]
    },
    {
        "In object oriented programming, the ability to present the same programming interface for differing underlying forms is known as, ": [
            "polymorphism", "transubstantiation", "changesets", "metamorphosis"
        ]
    },
    {
        "In dot net, all types derive from a common base class known as, ": [
            "object", "system", "string", "this"
        ]
    },
    {
        "The dot net framework contains a static class with many helpful mathmatical functions. What is the fully qualified name of this class? ": [
            "system dot math", "system dot arithmetic", "Microsoft dot mathmatics", "Microsoft dot arithmetic"
        ]
    },
    {
        "Which keyword should be used to indicate that a property or method can be accessed without creating an instance of the class? ": [
            "static", "constant", "public", "protected"
        ]
    },
    {
        "A method that does not have a return value uses this keyword in place of the return type. ": [
            "void", "null", "undefined", "abstract"
        ]
    },
    {
        "This keyword can be used when declaring a field, indicating that its value can only be set as part of the declaration, or in a constructor in the same class. ": [
            "readonly", "constant", "static", "var"
        ]
    },
    {
        "This keyword can be used when declaring a class, indicating that the definition of the class may be split into multiple files. ": [
            "partial", "partition", "import", "protected"
        ]
    },
    {
        "This keyword can be used to declare an implicitly typed local variable. It is still strongly typed, but the type is determined by the compiler. ": [
            "var", "dim", "string", "dynamic"
        ]
    },
    {
        "An unsigned 8-bit integer with a value between 0 and 255 is also known as, ": [
            "byte", "bit", "int", "buffer"
        ]
    },
    {
        "The System.Int32 class, which can be shortened with the keyword int, represents a signed 32-bit integer. What is the maximum value this can contain? ": [
            "2,147,483,648",
            "32,767",
            "255",
            "128"
        ]
    },
    {
        "This type should be used to hold decimal values when conserving memory is of greatest importance, and precision is not a major concern.": [
            "float",
            "decimal",
            "double",
            "long"
        ]
    },
    {
        "Numeric types can be described by this word, indicating that they can have both positive and negative values. ": [
            "signed",
            "variant",
            "double",
            "floating"
        ]
    },
    {
        "This object oriented principle involves hiding all but the relevant information about an object, to reduce complexity, and increase efficiency. ": [
            "abstraction", "secrets", "privacy", "inheritance"
        ]
    },
    {
        "Creating multiple versions of a method that accept different parameters is called, ": [
            "overloading", "duplicating", "instantiating", "overriding"
        ]
    },
    {
        "Along with the name of the method, the method's signature is comprised of, ": [
            "the number, order, and types of the parameters", "the number of parameters", "the types of the parameters", "the order of the parameters"
        ]
    },
    {
        "When creating a method in a child class who's implementation should always be used instead of the base class implementation, this keyword should be used. ": [
            "override", "new", "public", "void"
        ]
    },
    {
        "This access modifier should be used to ensure a type or member can be accessed by any code in the same assembly, but not from another assembly. ": [
            "internal", "private", "protected", "public"
        ]
    },
    {
        "This access modifier should be used to make a member accessible only within its class and by derived class instances. ": [
            "protected", "internal", "private", "public"
        ]
    },
    {
        "An identifier with an associated value which cannot be altered by the program during normal execution is known as, ": [
            "constant", "immutable", "static", "fixed"
        ]
    },
    {
        "This term can be used to describe an instance of the string class, indicating that it cannot be changed. Changing it actually results in a the creation of a new string. ": [
            "immutable", "static", "constant", "fixed"
        ]
    },
    {
        "Within a class, private variables are commonly referred to as, ": [
            "fields", "decorators", "properties", "attributes"
        ]
    },
    {
        "According to Robert C. Martin, also known as Uncle Bob, every module or class should have responsibility over one part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class. This is known as, ": [
            "Single Responsibility Principle", "Sole Purpose Principle", "DRY Principle", "The Singularity"
        ]
    },
    {
        "In their book, The Pragmatic Programmer, Andy Hunt and Dave Thomas describe this principle by stating that every piece of knowledge must have a single, unambiguous, authoritative representation within a system. The principle is known as, ": [
            "DRY Principle", "Single Responsibility Principle", "Encapsulation Principle", "KISS Principle"
        ]
    },
    {
        "Duplicated code, god classes, feature envy, and unnecessary uses of design patterns are all examples of, ": [
            "code smells", "code runoff", "project spiral", "spaghetti code"
        ]
    },
    {
        "Techopedia defines this as a concept in programming that reflects the extra development work that arises when code that is easy to implement in the short run is used instead of applying the best overall solution. ": [
            "technical debt", "project runoff", "code rot", "project escalation"
        ]
    },
    {
        "A class that excessively calls the methods of another class is said to have this common code smell. ": [
            "feature envy", "method reliance", "bilateral dependency", "technical debt"
        ]
    },
    {
        "This software design pattern involves passing objects to a client or class that depends on the object, rather than building that object inside of the client or class. ": [
            "dependency injection", "reversing of control", "dependency insertion", "parameter injection"
        ]
    },
    {
        "A method added to an object after the object is compiled is known as, ": [
            "an extension method", "a protected method", "an alteration method", "a static method" 
        ]
    },
    {
        "Officially released with Visual Studio 2015, this set of open-source compilers and code analysis tools is best known by the code name, ": [
            "Roslyn", "Katana", "Longhorn", "Redstone"
        ]
    },
    {
        "Sometimes called an array of arrays, this is an array whose elements are arrays. The elements of a this type of array can be of different dimensions and sizes. ": [
            "jagged array", "multidimentional array", "recursive array", "array list"
        ]
    },
    {
        "Used to pass methods as arguments to other methods, this C# type represents a reference to a method with a particular parameter list and return type. ": [
            "delegate", "handler", "function", "interface"
        ]
    },
    {
        "This can be used to dynamically create an instance of a type, bind the type to an existing object, or get the type from an existing object and invoke its methods or access its fields and properties.": [
            "reflection", "invocation", "decompilation", "refactoring"
        ]
    },
    {
        "The process of converting an object into a stream of bytes in order to store the object or transmit it to memory, a database, or a file is known as, ": [
            "serialization", "streaming", "encoding", "stringifying"
        ]
    },
    {
        "This C# keyword is used to declare a scope that contains a set of related objects. ": [
            "namespace", "class", "assembly", "public"
        ]
    },
    {
        "These classes and methods can be instantiated or called with type parameters, deferring the specification of one or more types until the class or method is declared and instantiated by client code. ": [
            "generics", "anonymous types", "inferred types", "dynamics"
        ]
    },
    {
        "This C# keyword is used to tell the compiler that a variable's type can change or that it is not known until runtime. ": [
            "dynamic", "var", "abstract", "nullable"
        ]
    }
];

// Route the incoming request based on type (LaunchRequest, IntentRequest, etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        if (event.session.application.applicationId !== "amzn1.ask.skill.1b8a271c-481d-4d87-850f-ec7d6b59b30e")
            context.fail("Invalid Application ID");

        if (event.session.new)
            onSessionStarted({requestId: event.request.requestId}, event.session);

        switch (event.request.type) {
            case "LaunchRequest":
                onLaunch(event.request, event.session, function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
                break;
            case "IntentRequest":
                onIntent(event.request, event.session, function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
                break;
            case "SessionEndedRequest":
                onSessionEnded(event.request, event.session);
                context.succeed();
                break;
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

//Called when the session starts
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId + ", sessionId=" + session.sessionId);
    //Add any session init logic here
}

//Called when the user invokes the skill without specifying what they want.
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId + ", sessionId=" + session.sessionId);
    getWelcomeResponse(callback);
}

//Called when the user specifies an intent for this skill.
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent;
    var intentName = intentRequest.intent.name;

    if (session.attributes && session.attributes.userPromptedForQuestionCount) {
        //delete session.attributes.userPromptedForQuestionCount;
        //if ("AMAZON.NUMBER" === intentName)
            handleNumberOfQuestionsRequest(intent, session, callback);
    }

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName)
            handleFinishSessionRequest(intent, session, callback);
        else if ("AMAZON.YesIntent" === intentName)
            handleRepeatRequest(intent, session, callback);
    }
    
    switch (intentName) {
        case "AnswerIntent":
        case "AnswerOnlyIntent":
        case "DontKnowIntent":
        case "AMAZON.YesIntent":
        case "AMAZON.NoIntent":
            handleAnswerRequest(intent, session, callback);
            break;
        case "AMAZON.StartOverIntent":
            getWelcomeResponse(callback);
            break;
        case "AMAZON.RepeatIntent":
            handleRepeatRequest(intent, session, callback);
            break;
        case "AMAZON.HelpIntent":
            handleGetHelpRequest(intent, session, callback);
            break;
        case "AMAZON.StopIntent":
        case "AMAZON.CancelIntent":
            handleFinishSessionRequest(intent, session, callback);
            break;
        default:
            throw "Invalid intent";
    }
}

//Called when the user ends the session. Is not called when the skill returns shouldEndSession=true.
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId + ", sessionId=" + session.sessionId);
    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "Welcome to C# Quiz";

function getWelcomeResponse(callback) {
    console.log("getWelcomeResponse called.")

    var speechOutput = "Welcome to C# Quiz. In this quiz, you will answer questions about C#, DotNet, and Object Oriented Programming. ";    
    var repromptText = "I currently have " + questions.length + " questions in my question bank. How many questions would you like me to ask? ";
    var shouldEndSession = false;

    speechOutput += repromptText;

    var sessionAttributes = {
        "speechOutput": speechOutput,
        "repromptText": repromptText,
        "userPromptedForQuestionCount": true
    };

    callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function startGame(callback) {
    console.log("startGame called.")

    CARD_TITLE = "Question 1 of " + GAME_LENGTH;
    var speechOutput = "OK. I will ask " + GAME_LENGTH + " " + (GAME_LENGTH == 1 ? "question. " : "questions. ");
    var gameQuestions = populateGameQuestions();
    var correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)); // Generate a random index for the correct answer, from 0 to 3
    var roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex);
    var currentQuestionIndex = 0;
    var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
    var repromptText = "Question 1. " + spokenQuestion + " ";
    var shouldEndSession = false;

    for (var i = 0; i < ANSWER_COUNT; i++)
        repromptText += (i + 1).toString() + ". " + roundAnswers[i] + ". ";
    
    speechOutput += repromptText;
    var sessionAttributes = {
        "speechOutput": speechOutput,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText": questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    
    callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index)
        throw "Invalid Game Length.";

    for (var i = 0; i < questions.length; i++)
        indexList.push(i);

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++) {
        var rand = Math.floor(Math.random() * index);
        index -= 1;
        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the correctAnswerTargetLocation variable.
    // Note that you can have as many answers as you want but only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]];

    var index = answersCopy.length;

    if (index < ANSWER_COUNT)
        throw "Not enough answers for question.";

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++) {
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (var i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleNumberOfQuestionsRequest(intent, session, callback) {
    if (isGreaterThanZero(intent) && parseInt(intent.slots.Answer.value) <= questions.length) {
        delete session.attributes.userPromptedForQuestionCount;
        GAME_LENGTH = parseInt(intent.slots.Answer.value);
        startGame(callback);
    }
    else {
        var speechOutput = "Please respond with a number between 1 and " + questions.length + ". ";
        callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, speechOutput, false));
    }
}

function randomIntFromInterval(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isGreaterThanZero(intent) && parseInt(intent.slots.Answer.value) <= ANSWER_COUNT;
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        CARD_TITLE = "New Game?";
        callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        CARD_TITLE = "Invalid Answer";
        callback(session.attributes, buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;

            var correctResponseIndex = randomIntFromInterval(1, 3);
            if (correctResponseIndex == 1)
                speechOutputAnalysis = "That answer is correct. ";
            else if (correctResponseIndex == 2)
                speechOutputAnalysis = "That's right. ";
            else
                speechOutputAnalysis = "You got it. ";

            CARD_TITLE = "Correct Answer!";
        } else {
            if (!userGaveUp) {
                var incorrectResponseIndex = randomIntFromInterval(1, 3);
                if (incorrectResponseIndex == 1)
                    speechOutputAnalysis = "That answer is incorrect. ";
                else if (incorrectResponseIndex == 2)
                    speechOutputAnalysis = "Sorry, that's not right. ";
                else
                    speechOutputAnalysis = "No, that's not it. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
            CARD_TITLE = "Incorrect Answer";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of " + GAME_LENGTH.toString() + " questions correct. ";
            
            if (currentScore / GAME_LENGTH === 1) {
                if (GAME_LENGTH === 1)
                    speechOutput += "Maybe you could try for two next time?";
                else
                    speechOutput += "A perfect score.";
            }
            else if (currentScore / GAME_LENGTH >= 0.8)
                speechOutput += "Not bad. Not bad at all.";
            else if (currentScore / GAME_LENGTH > 0.5)
                speechOutput += "That's more than half. Keep it up.";
            else
                speechOutput += "Keep working on it. You'll get there.";
                
            CARD_TITLE = "Thanks for Playing!";
                
            callback(session.attributes, buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];

            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex);
            var questionIndexForSpeech = currentQuestionIndex + 1;
            var repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";

            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i + 1).toString() + ". " + roundAnswers[i] + ". "
            }

            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + " of " + currentQuestionIndex + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": speechOutput,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText": questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            
            CARD_TITLE = "Question " + (currentQuestionIndex + 1) + " of " + GAME_LENGTH;
            
            callback(sessionAttributes, buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous repromptText from the session attributes if available else start a new game session
    if (!session.attributes || !session.attributes.speechOutput)
        getWelcomeResponse(callback);
    else
        callback(session.attributes, buildSpeechletResponseWithoutCard(session.attributes.repromptText, session.attributes.repromptText, false));
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.
    
    // Ensure that session.attributes has been initialized
    if (!session.attributes)
        session.attributes = {};

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.
    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
        
    callback(session.attributes, buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes, buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isGreaterThanZero(intent) {
    var isFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var isInt = isFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return isInt && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}