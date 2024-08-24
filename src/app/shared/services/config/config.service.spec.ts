import { TestBed } from '@angular/core/testing';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have correct routes', () => {
    expect(service.ROUTES.NEW).toEqual('thoughts/create');
    expect(service.ROUTES.LIST).toEqual('thoughts/all');
    expect(service.ROUTES.DELETE).toEqual('thoughts/delete/:id');
    expect(service.ROUTES.UPDATE).toEqual('thoughts/update/:id');
  });

  it('should have correct templates', () => {
    expect(service.TEMPLATES).toEqual([
      { id: 'template1', name: 'Modelo 1' },
      { id: 'template2', name: 'Modelo 2' },
      { id: 'template3', name: 'Modelo 3' },
    ]);
  });
});
