import { Injectable, inject } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private readonly _FB_SERVICE = inject(FirebaseService);
  private readonly _DB = getFirestore(this._FB_SERVICE.getConnection());
  private readonly _COLLECTION = collection(this._DB, 'usuarios');
  private _userTemp: any = undefined;

  constructor() {}

  async adicionarUsuario(usuario: any): Promise<string> {
    const usuarioRef = await addDoc(this._COLLECTION, usuario);
    return `Usuário(a) ${usuario.nome} cadastrado(a) com sucesso!`;
  }

  async exibirTodos(): Promise<any[]> {
    const usuariosSnap = await getDocs(this._COLLECTION);
    const usuariosData: any[] = [];

    usuariosSnap.forEach((usuario: any) => {
      const data = usuario.data();
      delete data.senha;

      usuariosData.push({
        id: usuario.id,
        ...data,
      });
    });

    return usuariosData;
  }

  async excluirUsuario(usuario: any): Promise<string> {
    await deleteDoc(doc(this._COLLECTION, usuario.id));
    return `Usuário(a) ${usuario.nome} excluído(a) com sucesso!`;
  }

  async editarUsuario(usuario: any): Promise<string> {
    const usuarioDocRef = doc(this._COLLECTION, usuario.id);
    const { id, ...usuarioData } = usuario;

    try {
      await updateDoc(usuarioDocRef, usuarioData);
      return `Usuário(a) ${usuario.nome} atualizado(a) com sucesso!`;
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      return `Erro ao atualizar usuário(a) ${usuario.nome}.`;
    }
  }

  salvarUsuarioTemporario(usuario: any): void {
    this._userTemp = usuario;
  }

  getUsuarioTemporario(): any {
    const usuario = this._userTemp;
    this._userTemp = undefined;
    return usuario;
  }

  async getUsuarioCompleto(id: string): Promise<any> {
    const usuarioDocRef = doc(this._COLLECTION, id);
    const usuarioSnap = await getDoc(usuarioDocRef);

    if (usuarioSnap.exists()) {
      return { id: usuarioSnap.id, ...usuarioSnap.data() };
    } else {
      console.log('No such document!');
      return null;
    }
  }
}
