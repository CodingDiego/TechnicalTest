interface Category {
    name: string;
    subcategories: Category[];
  }
  
  const categories: Category[] = [
    {
      name: 'category1',
      subcategories: [
        {
          name: 'category2',
          subcategories: []
        },
        {
          name: 'category3',
          subcategories: [
            {
              name: 'category4',
              subcategories: []
            }
          ]
        }
      ]
    },
    {
      name: 'category5',
      subcategories: []
    }
  ];
  
  const getCategoryPath = (categories: Category[], categoryName: string): string => {
    let path = '';
  
    const findCategory = (categoryArray: Category[], targetName: string, currentPath: string): void => {
      for (const category of categoryArray) {
        const newPath = currentPath + '/' + category.name;
        
        if (category.name === targetName) {
          path = newPath;
          return;
        } else if (category.subcategories.length > 0) {
          findCategory(category.subcategories, targetName, newPath);
        }
      }
    };
  
    findCategory(categories, categoryName, '');
  
    return path;
  };
  
  // OUTPUT SAMPLES
  console.log(getCategoryPath(categories, 'category4')); // should output: '/category1/category3/category4'
  console.log(getCategoryPath(categories, 'category2')); // should output: '/category1/category2'
  console.log(getCategoryPath(categories, 'category5')); // should output: '/category5'
  