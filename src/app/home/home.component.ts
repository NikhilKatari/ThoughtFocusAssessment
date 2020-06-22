import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieData = [];
  moviesList = [];
  filterList = [];
  fileData: any = [
    [
      "Hindi",
      "English",
      "Tamil",
      "Telugu",
      "Marathi",
      "Kannada",
      "Malayalam",
      "Punjabi",
      "Bengali",
      "Gujarati",
      "Assamese",
      "Rajasthani",
      "Bhojpuri",
      "Korean",
      "Maithili",
      "Ladakhi",
      "Italian"
    ],
    {
      "ET00123748": {
        "EventGroup": "EG00099215",
        "EventTitle": "Mirugaa",
        "EventCode": "ET00123748",
        "EventImageCode": "mirugaa-et00123748-06-05-2020-10-51-15",
        "EventLanguage": "Tamil",
        "EventGenre": "Drama",
        "EventURL": "mirugaa",
        "EventName": "Mirugaa",
        "ShowDate": "19 Jun, 2020",
        "DispReleaseDate": "JUNE 19, 2020",
        "MonthID": "202006",
        "TrailerURL": "https://www.youtube.com/watch?v=FREU4JRoLm4&t=1s",
        "AllowPreBook": "N",
        "IsAtmosEnabled": "N",
        "TentativeReleaseDate": "1",
        "EventIsDefault": "Y",
        "EventCensor": "",
        "EventDimension": "2D",
        "TrailerURLUploadDate": "2020-05-06 13:03:07",
        "LanguageSequence": "3",
        "IsMovieClubEnabled": "N",
        "IsPremiere": "N",
        "DisplayReleaseDate": "Jun, 2020",
        "IsTentativeReleaseYear": "N",
        "ratings": {
          "bmsRating": 0,
          "bmsCount": 0,
          "criticRating": 0,
          "criticCount": 0,
          "userRating": 0,
          "userCount": 0,
          "userReviewCount": 0,
          "avgRating": 0,
          "totalVotes": 0,
          "wtsCount": 352,
          "dwtsCount": 0,
          "maybe": 0,
          "totalWTSCount": 352,
          "wtsPerc": 100,
          "dwtsPerc": 0
        },
        "Region": [],
        "wtsCount": 402,
        "dwtsCount": 0,
        "maybeCount": 0,
        "csCount": "402",
        "trailerUploadDate": 1588750387000,
        "totalVotes": 0,
        "avgRating": 0,
        "wtsPerc": 100,
        "trailerType": "cs"
      },
      "ET00114967": {
        "EventGroup": "EG00091040",
        "EventTitle": "Penguin",
        "EventCode": "ET00114967",
        "EventImageCode": "penguin-et00114967-20-05-2020-03-12-05",
        "EventLanguage": "Tamil",
        "EventGenre": "Drama|Mystery|Thriller",
        "EventURL": "penguin",
        "EventName": "Penguin",
        "ShowDate": "19 Jun, 2020",
        "DispReleaseDate": "JUNE 19, 2020",
        "MonthID": "202006",
        "TrailerURL": "https://www.youtube.com/watch?v=1Mwp1CfFV-k",
        "AllowPreBook": "N",
        "IsAtmosEnabled": "N",
        "TentativeReleaseDate": "0",
        "EventIsDefault": "Y",
        "EventCensor": "",
        "EventDimension": "2D",
        "TrailerURLUploadDate": "2020-06-11 12:44:48",
        "LanguageSequence": "3",
        "IsMovieClubEnabled": "N",
        "IsPremiere": "N",
        "DisplayReleaseDate": "19 Jun, 2020",
        "IsTentativeReleaseYear": "N",
        "ratings": {
          "bmsRating": 0,
          "bmsCount": 0,
          "criticRating": 0,
          "criticCount": 0,
          "userRating": 0,
          "userCount": 0,
          "userReviewCount": 0,
          "avgRating": 0,
          "totalVotes": 0,
          "wtsCount": 427,
          "dwtsCount": 0,
          "maybe": 0,
          "totalWTSCount": 427,
          "wtsPerc": 100,
          "dwtsPerc": 0
        },
        "Region": [],
        "wtsCount": 1216,
        "dwtsCount": 0,
        "maybeCount": 0,
        "csCount": "1,216",
        "trailerUploadDate": 1591859688000,
        "totalVotes": 0,
        "avgRating": 0,
        "wtsPerc": 100,
        "trailerType": "cs"
      },
      "ET00130349": {
        "EventGroup": "EG00105543",
        "EventTitle": "Garjana",
        "EventCode": "ET00130349",
        "EventImageCode": "garjana-et00130349-06-05-2020-02-17-51",
        "EventLanguage": "Telugu",
        "EventGenre": "Drama",
        "EventURL": "garjana",
        "EventName": "Garjana",
        "ShowDate": "19 Jun, 2020",
        "DispReleaseDate": "JUNE 19, 2020",
        "MonthID": "202006",
        "TrailerURL": "https://www.youtube.com/watch?v=lmDLEBKKBTg&t=1s",
        "AllowPreBook": "N",
        "IsAtmosEnabled": "N",
        "TentativeReleaseDate": "1",
        "EventIsDefault": "Y",
        "EventCensor": "",
        "EventDimension": "2D",
        "TrailerURLUploadDate": "2020-05-06 13:03:50",
        "LanguageSequence": "4",
        "IsMovieClubEnabled": "N",
        "IsPremiere": "N",
        "DisplayReleaseDate": "Jun, 2020",
        "IsTentativeReleaseYear": "N",
        "ratings": {
          "bmsRating": 0,
          "bmsCount": 0,
          "criticRating": 0,
          "criticCount": 0,
          "userRating": 0,
          "userCount": 0,
          "userReviewCount": 0,
          "avgRating": 0,
          "totalVotes": 0,
          "wtsCount": 85,
          "dwtsCount": 0,
          "maybe": 0,
          "totalWTSCount": 85,
          "wtsPerc": 100,
          "dwtsPerc": 0
        }
      }
    }
  ]

  genereList: any = [];
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.movieData = this.fileData[1];

    for (let i = 1; i <= this.fileData[1].length; i++) {
      console.log(this.fileData[i]);
      this.movieData.push(this.fileData[i]);
    }
    this.filterList = this.movieData;
    this.moviesList = [];
    for (let i = 1; i <= this.fileData.length; i++) {
      this.moviesList.push(this.fileData[i]);
    }
  }

  ngAfterViewInit(): void {
    this.checkDuplicates();
  }
// check dropdown duplicate values ch
  checkDuplicates() {
    let jsonD: any = this.fileData[1];
    for (let key in jsonD) {
      // console.log(key);
      let value = jsonD[key];
      // console.log(value.EventGenre);
      let generesplitarray = value.EventGenre.split("|");

      generesplitarray.forEach(element => {
        //console.log(element);        
        if (this.genereList.indexOf(element) === -1) {
          this.genereList.push(element);
        }
      });
      // Use `key` and `value` 
    }
    console.log(this.genereList);
  }
  // drodown selected value
  onChange(selectedValue) {
    console.log(selectedValue);
    console.log(this.movieData);

    let getDataList = this.filterList;
    this.movieData = Object.keys(getDataList).map(k => getDataList[k]).filter(x => x.EventLanguage == selectedValue);
    console.log(this.filterList);
  }

  // for youtube url
  get_url_parameter(url) {
    var c = url.match('v=([^&]*)')[1]
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + c);
  }
}
