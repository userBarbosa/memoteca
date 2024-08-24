import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { ThoughtService } from './thought.service';
import { Thought } from '../../models/Thought.model';

describe('ThoughtService', () => {
  let service: ThoughtService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ThoughtService, provideHttpClientTesting()],
    });

    service = TestBed.inject(ThoughtService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#create', () => {
    it('should create a thought and return it', () => {
      const newThought: Thought = {
        id: '1',
        content: 'New thought',
        author: '',
        template: '',
      };

      service.create(newThought).subscribe((thought) => {
        expect(thought).toEqual(newThought);
      });

      const req = httpTestingController.expectOne(
        'http://localhost:3000/thoughts'
      );
      expect(req.request.method).toBe('POST');
      req.flush(newThought);
    });
  });

  describe('#list', () => {
    it('should return an array of thoughts', () => {
      const mockThoughts: Thought[] = [
        {
          id: '1',
          content: 'Thought 1',
          author: '',
          template: '',
        },
        {
          id: '2',
          content: 'Thought 2',
          author: '',
          template: '',
        },
      ];

      service.list().subscribe((thoughts) => {
        expect(thoughts).toEqual(mockThoughts);
      });

      const req = httpTestingController.expectOne(
        'http://localhost:3000/thoughts'
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockThoughts);
    });
  });

  describe('#get', () => {
    it('should return a single thought by ID', () => {
      const mockThought: Thought = {
        id: '1',
        content: 'Single thought',
        author: '',
        template: '',
      };

      service.get('1').subscribe((thought) => {
        expect(thought).toEqual(mockThought);
      });

      const req = httpTestingController.expectOne(
        'http://localhost:3000/thoughts/1'
      );
      expect(req.request.method).toBe('GET');
      req.flush(mockThought);
    });
  });

  describe('#delete', () => {
    it('should delete a thought by ID', () => {
      const mockThought: Thought = {
        id: '1',
        content: 'Deleted thought',
        author: '',
        template: '',
      };

      service.delete('1').subscribe((thought) => {
        expect(thought).toEqual(mockThought);
      });

      const req = httpTestingController.expectOne(
        'http://localhost:3000/thoughts/1'
      );
      expect(req.request.method).toBe('DELETE');
      req.flush(mockThought);
    });
  });

  describe('#update', () => {
    it('should update a thought and return it', () => {
      const updatedThought: Thought = {
        id: '1',
        content: 'Updated thought',
        author: '',
        template: '',
      };

      service.update(updatedThought).subscribe((thought) => {
        expect(thought).toEqual(updatedThought);
      });

      const req = httpTestingController.expectOne(
        'http://localhost:3000/thoughts/1'
      );
      expect(req.request.method).toBe('PUT');
      req.flush(updatedThought);
    });
  });
});
