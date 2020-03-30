import PaginationHelper from '../../src/scripts/model/paginationHelper';

describe('paginationHelper', () => {
  describe('mountGroups', () => {
    const helper = new PaginationHelper();

    it('always return an array when mountGroups is called when any integer number is passed', () => {
      expect(Array.isArray(helper.mountGroups(1))).toBe(true);
      expect(Array.isArray(helper.mountGroups(5))).toBe(true);
      expect(Array.isArray(helper.mountGroups(10))).toBe(true);
      expect(Array.isArray(helper.mountGroups(53))).toBe(true);
    });

    it('every element of the returned array should be an array', () => {
      helper.mountGroups(16).forEach(group => {
        expect(Array.isArray(group)).toBe(true);
      })
    });

    describe('every element(group) of the returned array should..', () => {
      it('be a group with a max size of 5 elements', () => {
        const lengthHigherThan5 = group => (group || []).length > 5;
        const anyGroupWithMoreThan5Elements =
          helper.mountGroups(13).every(lengthHigherThan5);

        expect(anyGroupWithMoreThan5Elements).toBe(false)
      });

      it('every element of the group should be a number', () => {
        const isNumber = element => typeof element === 'number';

        helper.mountGroups(30).forEach(group => {
          expect(group.every(isNumber)).toBe(true);
        });
      });

      it('elements is sequencial', () => {
        const isSequencial = (cur, i, group) => {
          if (group[i + 1]) {
            cur < group[i + 1];
          }

          return true;
        };

        expect(helper.mountGroups(4).every(isSequencial)).toBe(true);
      });
    });
  });

  describe('getCurrentGroup', () => {
    const helper = new PaginationHelper();
    const groups = helper.mountGroups(11);

    it('returns [0, 1, 2, 3, 4] when current position is 0', () => {
      expect(helper.getCurrentGroup(groups, 0)).toEqual([0, 1, 2, 3, 4]);
    });

    it('returns [5, 6, 7, 8, 9] when current position is 1', () => {
      expect(helper.getCurrentGroup(groups, 1)).toEqual([5, 6, 7, 8, 9]);
    });

    it('returns [10] when current position is 2', () => {
      expect(helper.getCurrentGroup(groups, 2)).toEqual([10]);
    });
  });

  describe('groupPages', () => {
    const helper = new PaginationHelper();

    it('returns 0 when currentPage < 5', () => {
      expect(helper.groupPages(1)).toEqual(0);
      expect(helper.groupPages(3)).toEqual(0);
      expect(helper.groupPages(4)).toEqual(0);
    });

    it('returns 1 when currentPage > 5 and < 10', () => {
      expect(helper.groupPages(6)).toEqual(1);
      expect(helper.groupPages(8)).toEqual(1);
      expect(helper.groupPages(9)).toEqual(1);
    });
  });

  describe('getPages', () => {
    const helper = new PaginationHelper();

    it('returns an empty array when totalElement <= 1', () => {
      expect(helper.getPages({ total: 0, current: 1 })).toEqual([]);
      expect(helper.getPages({ total: 1, current: 1 })).toEqual([]);
    });

    it('returns [0, 1, 2, 3, 4] when currentPagination <= 5', () => {
      expect(helper.getPages({ total: 5, current: 1 })).toEqual([0, 1, 2, 3, 4]);
      expect(helper.getPages({ total: 5, current: 5 })).toEqual([0, 1, 2, 3, 4]);
    });

    it('returns [5, 6, 7, 8, 9] when currentPagination < 5 and <= 10', () => {
      expect(helper.getPages({ total: 10, current: 6 })).toEqual([5, 6, 7, 8, 9]);
      expect(helper.getPages({ total: 10, current: 10 })).toEqual([5, 6, 7, 8, 9]);
    });
  });

  describe('getTotalPages', () => {
    const helper = new PaginationHelper();

    it('returns 2 when totalItens = 10 and maxPages = 5', () => {
      expect(helper.getTotalPages(10, 5)).toEqual(2);
    });

    it('returns 20 when totalItens = 100 and maxPages = 5', () => {
      expect(helper.getTotalPages(100, 5)).toEqual(20);
    });

    it('returns 200 when totalItens = 1000 and maxPages = 5', () => {
      expect(helper.getTotalPages(1000, 5)).toEqual(200);
    });
  });

  describe('hasNext', () => {
    const helper = new PaginationHelper();

    it('returns false when totalPagination <= 1', () => {
      expect(helper.hasNext({ total: 0, current: 1 })).toEqual(false);
      expect(helper.hasNext({ total: 1, current: 1 })).toEqual(false);
    });

    it('returns false when totalPagination <= current', () => {
      expect(helper.hasNext({ total: 3, current: 5 })).toEqual(false);
      expect(helper.hasNext({ total: 4, current: 4 })).toEqual(false);
    });

    it('returns true when totalPagination > current', () => {
      expect(helper.hasNext({ total: 10, current: 5 })).toEqual(true);
      expect(helper.hasNext({ total: 4, current: 3 })).toEqual(true);
    });
  });

  describe('hasPrev', () => {
    const helper = new PaginationHelper();

    it('returns true when totalPagination > 0 and current > 1', () => {
      expect(helper.hasPrev({ total: 1, current: 2 })).toEqual(true);
      expect(helper.hasPrev({ total: 10, current: 5 })).toEqual(true);
      expect(helper.hasPrev({ total: 4, current: 3 })).toEqual(true);
    });

    it('returns false when totalPagination < 0 and current <= 1', () => {
      expect(helper.hasPrev({ total: 0, current: 1 })).toEqual(false);
      expect(helper.hasPrev({ total: 0, current: 0 })).toEqual(false);
    });
  });

  describe('getPrev', () => {
    const helper = new PaginationHelper();


    it('returns previousPage(current - 1) when totalPagination > 0 and current > 1', () => {
      expect(helper.getPrev({ total: 10, current: 5 })).toEqual(4);
      expect(helper.getPrev({ total: 4, current: 3 })).toEqual(2);
    });


    it('returns false when totalPagination < 0 and current <= 11', () => {
      expect(helper.getPrev({ total: 0, current: 1 })).toEqual(undefined);
      expect(helper.getPrev({ total: 0, current: 0 })).toEqual(undefined);
    });
  });

  describe('getNext', () => {
    const helper = new PaginationHelper();


    it('returns nextPage(current + 1) when totalPagination > 0 and current > 1', () => {
      expect(helper.getNext({ total: 10, current: 5 })).toEqual(6);
      expect(helper.getNext({ total: 4, current: 3 })).toEqual(4);
    });


    it('returns undefined when totalPagination < 0 and current <= 11', () => {
      expect(helper.getNext({ total: 0, current: 1 })).toEqual(undefined);
      expect(helper.getNext({ total: 0, current: 0 })).toEqual(undefined);
    });
  });
});
