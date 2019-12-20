# 👨‍🏫 Evaluation Tool for Teachers 👩‍🏫

## What this project is about

Final Assignment
Build an Evaluation Tool for Teachers within 3.5 days


## Features

Currently, we collect these evaluations in a spreadsheet. (yuck!) The spreadsheet has
the following columns:

- Picture - A photo of the student
- Name - The full name of the student
- Day - Column for each day containing the colour code and optionally some
remarks

We agreed between teachers that if a students is marked YELLOW or RED, we have to fill
in a remark as well. For GREEN students, we are allowed to omit the remark.

#### User Stories

- As a Teacher I can sign into the tool with my email and password to start using it
- As a Teacher, after I signed in, I see a (list of) current classes, identifiable by their
Batch number (e.g. Batch #1), start date, and end date.
- As a Teacher, I can create a new class by giving it a Batch number, start date, and
end date.
- As a Teacher I can add, edit, remove students in a class. To add a student I need to
provide: 1) their full name, 2) (a link to) their profile picture.
- As a Teacher, I can click on a class, after which I see a grid of all the students by their
name and photo, and the last colour code given to them. Above the students grid, I
see a bar with 1-3 segments, showing me the percentage (%) of students evaluated
GREEN, YELLOW, and RED.
- As a Teacher, when I click on a photo or name, I can click on GREEN, YELLOW, or RED, fill
in the date (defaults to today), and a remark. When I click “Save” it saves my
evaluation, and takes me back to the student overview, when I click “Save and Next” it
saves and shows me the next student.
- As a Teacher, when I look at a student’s page, I can only fill in one evaluation per
student per day. I can edit my own evaluations.
- ALGORITHM PART! As a Teacher, from the class view I can click a button “ASK A
QUESTION”. It shows me the name and picture of a random student to ask a
question. Not entirely random though: RED students get ~50% of the questions
YELLOW students ~33%, and GREEN students ~17%.

## Technologies used

#### Back-end 

For the Back-end check out **[this repository.](https://github.com/Panthari-Panthong/Technical-assignment-server)**

- Express
- Postgres
- NodeJS

#### Front-end
- React
- Redux


## Create React App

This project was scaffolded using the create-react-app cli.

**[The standard create-react-app docs can be found in here](./Setup.md)**
