import { TestBed } from '@angular/core/testing';

import { UserService } from './userservice';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Users.Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
