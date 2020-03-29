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
});
