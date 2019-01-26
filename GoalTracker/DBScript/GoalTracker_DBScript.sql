
USE GoalTracker;

CREATE PROC spDropForeignKeys
AS
BEGIN
	WHILE(EXISTS(SELECT 1 FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS WHERE CONSTRAINT_TYPE='FOREIGN KEY'))
	BEGIN
		DECLARE @sql NVARCHAR(2000)
		SELECT TOP 1 @sql=('ALTER TABLE ' + TABLE_SCHEMA + '.[' + TABLE_NAME
		+ '] DROP CONSTRAINT [' + CONSTRAINT_NAME + ']')
		FROM information_schema.table_constraints
		WHERE CONSTRAINT_TYPE = 'FOREIGN KEY'
		EXEC (@sql)
	END
END;

EXEC spDropForeignKeys;


EXEC sp_MSforeachtable @command1 = "DROP TABLE ?"

---------------------- Creating Tables ----------------------

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

CREATE TABLE fitnessPlansExercises (
	id INT PRIMARY KEY IDENTITY(1,1),
	exerciseId INT NOT NULL,
	planId INT NOT NULL,
)

CREATE TABLE fitnessExercises (
	id INT PRIMARY KEY IDENTITY(1,1),
	[name] VARCHAR(50) NOT NULL,
	[description] VARCHAR(50) NOT NULL,
	-- fitnessExerciseCategoryId INT NOT NULL
	-- can not set not null becuase need to defual it to null when PK gets deleted
	fitnessExerciseCategoryId INT
)


---------------------- Creating Relationship ----------------------
ALTER TABLE goals 
ADD CONSTRAINT FK_UserGoal
FOREIGN KEY (userId) REFERENCES users(id)
ON DELETE CASCADE;

ALTER TABLE fitnessPlans 
ADD CONSTRAINT FK_UserPlan
FOREIGN KEY (userId) REFERENCES users(id)
ON DELETE CASCADE;

ALTER TABLE fitnessPlansExercises 
ADD CONSTRAINT FK_PlanPlanExercise
FOREIGN KEY (planId) REFERENCES fitnessPlans(id)
ON DELETE CASCADE;

ALTER TABLE fitnessPlansExercises 
ADD CONSTRAINT FK_ExercisePlanExercise
FOREIGN KEY (exerciseId) REFERENCES fitnessExercises(id)
ON DELETE CASCADE;

ALTER TABLE fitnessPlansDays
ADD CONSTRAINT FK_PlanPlanDay
FOREIGN KEY (planId) REFERENCES fitnessPlans(id)
ON DELETE CASCADE;

ALTER TABLE fitnessPlansDays
ADD CONSTRAINT FK_DayPlanDay
FOREIGN KEY (dayId) REFERENCES fitnessDays(id)
ON DELETE CASCADE;

ALTER TABLE fitnessExerciseCategories
ADD CONSTRAINT FK_PlanExerciseCategory
FOREIGN KEY (fitnessPlanId) REFERENCES fitnessPlans(id)
ON DELETE CASCADE;

ALTER TABLE fitnessExercises
ADD CONSTRAINT FK_ExerciseCategoryExercise
FOREIGN KEY (fitnessExerciseCategoryId) REFERENCES fitnessExerciseCategories(id)
-- ON DELETE CASCADE;
-- can not ON DELETE CASCADE becuase fitnessPlansExercises table refers to fitnessExercises id
On Delete Set Null

ALTER TABLE userFitnessExercises
ADD CONSTRAINT FK_UserFitnessExerciseFitnessExercise
FOREIGN KEY (fitnessExerciseId) REFERENCES fitnessExercises(id)
ON DELETE CASCADE;










