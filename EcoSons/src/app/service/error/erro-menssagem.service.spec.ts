import { TestBed } from '@angular/core/testing';

import { ErroMenssagemService } from './erro-menssagem.service';

describe('ErroMenssagemService', () => {
  let service: ErroMenssagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErroMenssagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
