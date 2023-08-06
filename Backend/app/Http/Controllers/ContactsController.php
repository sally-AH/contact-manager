<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactsController extends Controller
{
    function getContacts() {
        $contacts = Contact::all();
        return json_encode(["contacts"=>$contacts]);
    }

    function addContacts(Request $request){
        $contact = new Contact();
        $contact->name=$request['name'];
        $contact->phone=$request['phone'];
        $contact->latitude=$request['latitude'];
        $contact->longitude=$request['longitude'];
        $contact->save();
        

    }
}
