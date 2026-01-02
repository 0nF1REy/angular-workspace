import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Vehicle } from './pages/sw-vehicles/vehicle';
import { VehicleData } from './pages/sw-vehicles/vehicle-data';
import { Film } from './pages/sw-films/film';
import { FilmData } from './pages/sw-films/film-data';

// Classe necessária para a In Memory Web API
export class AppData implements InMemoryDbService {
  // Cria o banco de dados "em memória"
  // Em seguida, é possível fazer requisições HTTP para obter esses dados,
  // como se eles estivessem localizados em um servidor backend
  createDb(): { vehicles: Vehicle[]; films: Film[] } {
    const vehicles = VehicleData.vehicles;
    const films = FilmData.films;
    return { vehicles, films };
  }
}
