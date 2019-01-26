CREATE TABLE goals (
	id INT PRIMARY KEY IDENTITY(1,1),
	detail VARCHAR(200) NOT NULL,
	userId INT NOT NULL,
	goalTypeId INT NOT NULL
)

CREATE TABLE users (
	id INT PRIMARY KEY IDENTITY(1,1),
	userName VARCHAR(50) NOT NULL,
	[password] VARCHAR(50) NOT NULL,
	isActive BIT NOT NULL,
	isAdmin BIT NOT NULL,
	firebaseId VARCHAR(50) NOT NULL
)

CREATE TABLE fitnessPlans (
	id INT PRIMARY KEY IDENTITY(1,1),
	duration float NOT NULL,
	userId INT NOT NULL,
	usePredefinedExercise BIT NOT NULL
)

CREATE TABLE fitnessPlansDays (
	id INT PRIMARY KEY IDENTITY(1,1),
	planId INT NOT NULL,
	dayId INT NOT NULL
)

CREATE TABLE fitnessDays (
	id INT PRIMARY KEY IDENTITY(1,1),
	[day] VARCHAR(10) NOT NULL,
)

CREATE TABLE fitnessExerciseCategories (
	id INT PRIMARY KEY IDENTITY(1,1),
	[name] VARCHAR(10) NOT NULL,
	fitnessPlanId INT NOT NULL
)

CREATE TABLE userFitnessExercises (
	id INT PRIMARY KEY IDENTITY(1,1),
	fitnessExerciseId INT NOT NULL,
	[sets] INT NOT NULL,
	reps INT NOT NULL,
	userId INT NOT NULL
)

CREATE TABLE fitnessPlanExercises (
	id INT PRIMARY KEY IDENTITY(1,1),
	exerciseId INT NOT NULL,
	planId INT NOT NULL,
)

CREATE TABLE fitnessExercises (
	id INT PRIMARY KEY IDENTITY(1,1),
	[name] VARCHAR(50) NOT NULL,
	[description] VARCHAR(50) NOT NULL,
	fitnessExerciseCategoryId INT NOT NULL
)


