import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.css']
})
export class TracklistComponent implements OnInit {

  public user_type: any;
  public contactuslistFlag: boolean = false;
  // componentRef: any;
  // datasource: any;


  // use for Download the PDF

  custom_link: any = '';


  // use for grab the link
  grab_link: any = [];

  myTable: any = [];





  public status: any = [{ val: 0, name: 'Active' }, { val: 1, name: 'Inactive' }, { val: 1, name: 'Lock' }];


  statusarray: any = [{ val: 0, name: 'Active' }, { val: 1, name: 'Inactive' }, { val: 3, name: 'Lock' }];


  // emailarray: any = [{ val: 'sourotest222@gmail.com', name: 'sourotest222@gmail.com' }, { val: 'octtest@yopmail.com', name: 'octtest@yopmail.com' }, { val: 'septest@yopmail.com', name: 'septest@yopmail.com' }];


  editroute: any = 'param';



  modify_header_array: any = {
    address: 'Address',
  };



  tabledata_header_skip: any = ['ip'];




  tabledata_detail_skip: any = ['ip', '_id', 'email_search', 'name_search'];



  tabledata_detail_datatype: any = [{
    key: 'images',
    value: 'image',
    fileurl: 'http://18.222.26.198/upload/brandimages/'
  }];


  updateendpoint = 'addorupdatedata';

  deleteendpoint = 'api/deletecontactusdata';


  tablename = 'users';


  searchendpoint = 'datalist';

  click_to_add_ananother_page = '/adminlist';




  date_search_endpoint: any = 'datalist';

  limitcond: any = {
    limit: 10,
    skip: 0,
    pagecount: 1
  };


 public libdata: any = {

    detailview_override: [
      { key: 'addedtime', val: 'Contacted On' },
    ],

    updateendpoint: 'statusupdate',
    hideeditbutton: true,
    hidedeletebutton: false,
    hideviewbutton: false,
    hidestatustogglebutton: true,
    hideaction: false,
    tableheaders: ['trackablename', 'address', 'addedtime'],


  };

  sortdata: any = {
    type: 'desc',
    field: '_id',
    options: ['addedtime']
  };



  date_search_source: any = 'admin_blog_list';

  datacollection: any = 'addalldata';

  date_search_source_count: any = 0;

  search_settings: any = {

    // datesearch: [{ startdatelabel: 'Contacted On Start Date', enddatelabel: 'Conatcted On End Date', submit: 'Search', field: 'created_datetime' }],   

    //selectsearch:[{ label: 'Search By Status', field: 'status', values: this.status }], 

    textsearch: [{ label: "Search By address", field: 'address' },
    { label: "Search by trackablename", field: 'trackablename' }],


  };

  constructor(public router: Router, private route: ActivatedRoute, public _apiService: ApiService) {

    // this.user_type = JSON.parse(this.cookieService.get('type'));


    // this.datasource = '';
    const endpoint = 'addalldata';
    const endpointc = 'addalldata-count';

    const data: any = {
      condition: {
        limit: 10,
        skip: 0
      },
      sort: {
        type: 'desc',
        field: '_id',
      }

    };
    this._apiService.httpViaPost(endpointc, data).subscribe((res: any) => {
      this.date_search_source_count = res.count;
      console.log(this.date_search_source_count)

    }, error => {
      console.log('Oooops!');
    });

    this._apiService.httpViaPost(endpoint, data).subscribe((response: any) => {
      this.myTable = response.result.res;
      if (this.myTable.length == 0) {
        this.contactuslistFlag = true;
      }
      console.log(this.myTable)

    }, error => {
      console.log('Oooops!');
    });

  }


  ngOnInit() {
  }

}
