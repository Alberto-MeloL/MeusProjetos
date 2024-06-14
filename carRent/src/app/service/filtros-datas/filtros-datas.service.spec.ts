import { TestBed } from '@angular/core/testing';

import { FiltrosDatasService } from './filtros-datas.service';

describe('FiltrosDatasService', () => {
  let service: FiltrosDatasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltrosDatasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
