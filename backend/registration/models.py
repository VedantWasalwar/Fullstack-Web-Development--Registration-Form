from django.db import models

class Student(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    father_name = models.CharField(max_length=100)
    mother_name = models.CharField(max_length=100)
    gender = models.CharField(max_length=20)
    mobile = models.CharField(max_length=15)
    dob = models.DateField(null=True, blank=True)

    email = models.EmailField()

    skills = models.CharField(max_length=200)
    religion = models.CharField(max_length=50)
    nationality = models.CharField(max_length=50)

    address = models.TextField()
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=50)

    documents = models.CharField(max_length=200)

    def __str__(self):
        return self.first_name
