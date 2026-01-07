import { initializeApp } from 'firebase/app';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private readonly _FIREBASE_CONFIG = {
    apiKey: 'AIzaSyBygPALo4VN_DP8Qy899QSPZcOQ0CXFmiw',
    authDomain: 'j-ga-pw2-2025-alan.firebaseapp.com',
    projectId: 'j-ga-pw2-2025-alan',
    storageBucket: 'j-ga-pw2-2025-alan.firebasestorage.app',
    messagingSenderId: '1077324483496',
    appId: '1:1077324483496:web:9a54eee8e82a5cfcc82b9d',
  };

  private readonly _APP = initializeApp(this._FIREBASE_CONFIG);

  constructor() {}

  getConnection() {
    return this._APP;
  }
}
