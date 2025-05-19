import {environment} from '@env';

export class EndPoints {
  static readonly QUESTIONAIRES = environment.REST_CORE + '/questionaires';
}
