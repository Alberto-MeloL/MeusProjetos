import { TestBed } from '@angular/core/testing';

import { FinalizarAlugueisService } from './finalizar-alugueis.service';

describe('FinalizarAlugueisService', () => {
  let service: FinalizarAlugueisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinalizarAlugueisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
