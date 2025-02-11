# stride-learning
A tutoring service to help learners of all ages reach their full potential through inspired teaching and personalized learinig

To run backend locally:
npm run dev

Entry point for Backend services:
app.ts

Environment variables (You'll need to provide your own credentials for third party services
):
- SQL Port (Optional, by default PORT=4000): `PORT`
- PostgreSQL DB: `DATABASE_URL`, `DIRECT_URL`
- DynamoDB: `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`

Relational diagram for the SQL Tables
![image](https://github.com/user-attachments/assets/5f2ebff3-c0ec-4f3c-851b-dc1e6f92fad2)
