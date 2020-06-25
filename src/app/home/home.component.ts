import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieData = [];
  moviesList = [];
  filterList = [];
  fileData: any;

  genereList: any = [];
  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {
    this.sanitizer = sanitizer;

   }

  ngOnInit(): void {

    this.http.get('assets/data.json').subscribe(response => {
      this.fileData = response
      console.log(response, 'response from json')
      this.movieData = this.fileData[1];
      this.filterList = this.movieData;

    });

    // for (let i = 1; i <= this.fileData[1].length; i++) {
    //   console.log(this.fileData[i]);
    //   this.movieData.push(this.fileData[i]);
    // }
    // this.moviesList = [];
    // for (let i = 1; i <= this.fileData.length; i++) {
    //   this.moviesList.push(this.fileData[i]);
    // }
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
    this.movieData = Object.keys(getDataList).map(k => getDataList[k]).filter(x => x.EventLanguage.toLowerCase() == selectedValue.toLowerCase());

    console.log(this.movieData, 'filtered');

  }
  // drodown selected value
  onChangeGenere(selectedValue) {
    console.log(selectedValue);
    console.log(this.movieData);

    let getDataList = this.filterList;
    this.movieData = Object.keys(getDataList).map(j => getDataList[j]).filter(x => x.EventGenre.toLowerCase().includes(selectedValue.toLowerCase()));
    console.log(this.filterList);
  }
  //for youtube url
  // get_url_parameter(url) {
    
  //     var c = url.match('v=([^&]*)')[1];
  //     return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + c);
  // }
  // get_url_parameter = (url: string) => {
  //   const [a, , b] = url
  //     .replace(/(>|<)/gi, '')
  //     .split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  //   if (b !== undefined) {
  //     // return b.split(/[^0-9a-z_-]/i)[0];
  //     return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" +b);
  //   } else {
  //     return a;
  //   }  
  // };

  // Youtube regex added
  get_url_parameter = (url: string) => {
  var regex = new RegExp(/^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);
  var url = url;
  var matches = regex.exec(url);
  var videoId = matches[2];
  return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" +  videoId);
  }
}
