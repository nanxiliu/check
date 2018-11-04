# Check

![homepage screenshot](/public/img/1.PNG)

![homepage screenshot](/public/img/2.PNG)

## Motivation

With tens of candidates on an election ballot, it's difficult to know what each person's platform is. Thus, we wanted to make voting easier and help voters become more informed and knowledgeable, so we created Check at CalHacks 2018.

Check allows a voter to upload an image of their ballot onto our website, and easily access key information about candidates on the ballot. Increasing voting participation is important in leveraging democracy, and we believe that Check can minimize the amount of work voters have to put in to make a quick and informed decision by checking out the candidates on their ballots.

In the future, we plan to scale this project to work for ballots of all different states as well as including political scales that associate with a certain user's personal political leanings as well. Also, it'd be cool to be able to take a live photo of a ballot from the website or turn this into a mobile application.

## Presentation

Check out our presentation [here](https://docs.google.com/presentation/d/1NMyVIsTL-Q1PNLD5dLRacvMthY9xhXem3_yNmQhBO7g/edit?usp=sharing)!

![presentation screenshot](/public/img/present.PNG)

## Technologies

* Google Cloud Platform - Image to Text Recognition (OCR), Database Storage
* UIPath - Scrape websites for candidate and ballot information
* HTML
* CSS
* Javascript
* Bootstrap

## Steps to Run

1. Clone all code from github repo or download the zip file and unzip it.
2. Go to the code in your terminal or command line.
3. Navigate to the folder above `check` in your command line.
4. Run `npm i -g http-server`
5. Run `http-server` (do not run `cd check` first - you should be one folder above check)
6. Go to your web browser, copy and paste the link that was outputted from running `http-server`, and click `check` then `src`.
7. You should be able to run our website now!