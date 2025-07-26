Yes! Abandon the world we live in filled with global warming disasters, Gaza people starving to death, Russia hammering Ukraine, Africa destroying itself, world leaders kissing Trump's ass.  

Move to a world a better science that realizss nuclear fusion instead of oil, moneyless economies with no hunger, governments integrated with AI, teleportation to other planets for tourism, levitating ships to avoid earthquakes floods hurricanes.  


The Khmer were the superpower of Southeast Asia stronger than Java or Sri Vijaya. Before Islam came, Khmer is the best representative of Southeast Asia. 

The Thai people aren't even from Thailand. They're from Bai Yue like the Vietnamese. It would be absurd to tell the Americans to go back to England whenever they are hurting the Native Americans. Instead, we implore them to respect the natives and their land and to live in peace with them. Likewise, we tell the Thais please restore the dignity of the Khmer who were betrayed and sacked by the Siamese, Chams, and Malays. The sacking of Khmer by Siam would be ok if Siam could be the shining example of Southeast Asia to the world. But no. Right now, Singapore is the best Southeast Asian. 




{{ define "main" }}
<div class="container mx-auto px-4 max-w-(--breakpoint-md) py-8">
  <h1 class="text-3xl font-bold mb-6 dark:text-white">{{ .Title }}</h1>
  
  <div class="mb-8">
    <div class="flex flex-col sm:flex-row gap-4 items-end">
      
      <!-- Class Level Dropdown -->
      <div class="flex-1">
        <label for="level-select" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ if eq .Site.Language.Lang "vi" }}Cấp độ{{ else }}Class Level{{ end }}
        </label>
        <select id="level-select" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <option value="">{{ if eq .Site.Language.Lang "vi" }}Tất cả cấp độ{{ else }}All Levels{{ end }}</option>
          <option value="beginner">{{ if eq .Site.Language.Lang "vi" }}Người mới bắt đầu{{ else }}Beginner{{ end }}</option>
          <option value="intermediate">{{ if eq .Site.Language.Lang "vi" }}Trung cấp{{ else }}Intermediate{{ end }}</option>
          <option value="advanced">{{ if eq .Site.Language.Lang "vi" }}Nâng cao{{ else }}Advanced{{ end }}</option>
        </select>
      </div>
      
      <!-- Day of Week Dropdown -->
      <div class="flex-1">
        <label for="day-select" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {{ if eq .Site.Language.Lang "vi" }}Ngày trong tuần{{ else }}Day of Week{{ end }}
        </label>
        <select id="day-select" class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <option value="">{{ if eq .Site.Language.Lang "vi" }}Tất cả các ngày{{ else }}All Days{{ end }}</option>
          <option value="monday">{{ if eq .Site.Language.Lang "vi" }}Thứ Hai{{ else }}Monday{{ end }}</option>
          <option value="tuesday">{{ if eq .Site.Language.Lang "vi" }}Thứ Ba{{ else }}Tuesday{{ end }}</option>
          <option value="wednesday">{{ if eq .Site.Language.Lang "vi" }}Thứ Tư{{ else }}Wednesday{{ end }}</option>
          <option value="thursday">{{ if eq .Site.Language.Lang "vi" }}Thứ Năm{{ else }}Thursday{{ end }}</option>
          <option value="friday">{{ if eq .Site.Language.Lang "vi" }}Thứ Sáu{{ else }}Friday{{ end }}</option>
          <option value="saturday">{{ if eq .Site.Language.Lang "vi" }}Thứ Bảy{{ else }}Saturday{{ end }}</option>
          <option value="sunday">{{ if eq .Site.Language.Lang "vi" }}Chủ Nhật{{ else }}Sunday{{ end }}</option>
        </select>
      </div>
      
      <!-- Search Button -->
      <div>
        <button id="search-button" class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
          {{ if eq .Site.Language.Lang "vi" }}Tìm kiếm{{ else }}Search{{ end }}
        </button>
      </div>
    </div>
  </div>
  
  <div id="search-results" class="mt-6">
    <p class="dark:text-gray-100">{{ if eq .Site.Language.Lang "vi" }}Chọn lớp yoga của bạn.{{ else }}Choose your yoga class.{{ end }}</p>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const searchButton = document.getElementById('search-button');
  const levelSelect = document.getElementById('level-select');
  const daySelect = document.getElementById('day-select');
  const resultsContainer = document.getElementById('search-results');
  
  // Get current language from Hugo
  const currentLang = '{{ .Site.Language.Lang }}';
  
  // Search when button is clicked
  searchButton.addEventListener('click', performSearch);
  
  // Also search when dropdowns change
  levelSelect.addEventListener('change', performSearch);
  daySelect.addEventListener('change', performSearch);
  
  function performSearch() {
    const selectedLevel = levelSelect.value;
    const selectedDay = daySelect.value;
    
    // Show loading state
    resultsContainer.innerHTML = `<p class="dark:text-gray-100">${currentLang === 'vi' ? 'Đang tìm kiếm...' : 'Searching...'}</p>`;
    
    fetch('/index.json')
      .then(response => response.json())
      .then(data => {
        const results = data.filter(item => {
          // Filter by current language
          const isCurrentLanguage = item.permalink.includes(`/${currentLang}/classes/`);
          if (!isCurrentLanguage) return false;
          
          // Filter by level if selected
          const levelMatch = !selectedLevel || 
            item.permalink.includes(`/classes/${selectedLevel}`) ||
            (item.level && item.level.toLowerCase() === selectedLevel.toLowerCase());
          
          // Filter by day if selected
          const dayMatch = !selectedDay || 
            (item.day && item.day.toLowerCase() === selectedDay.toLowerCase()) ||
            (item.schedule && item.schedule.toLowerCase().includes(selectedDay.toLowerCase()));
          
          return levelMatch && dayMatch;
        });
        
        displayResults(results, selectedLevel, selectedDay);
      })
      .catch(error => {
        resultsContainer.innerHTML = `<p class="dark:text-red-100">${currentLang === 'vi' ? 'Lỗi khi tìm kiếm. Vui lòng thử lại sau.' : 'Error fetching search data. Please try again later.'}</p>`;
        console.error('Search error:', error);
      });
  }
  
  function displayResults(results, selectedLevel, selectedDay) {
    if (results.length === 0) {
      const noResultsText = currentLang === 'vi' ? 
        'Không tìm thấy lớp học phù hợp' : 
        'No classes found matching your criteria';
      
      resultsContainer.innerHTML = `
        <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 rounded">
          <p class="dark:text-yellow-200 text-yellow-700">${noResultsText}</p>
        </div>
      `;
      return;
    }
    
    const count = results.length;
    const foundText = currentLang === 'vi' ? 
      `Tìm thấy ${count} lớp học` : 
      `Found ${count} class${count !== 1 ? 'es' : ''}`;
    
    const criteriaText = [];
    if (selectedLevel) {
      const levelDisplay = currentLang === 'vi' ? 
        (selectedLevel === 'beginner' ? 'Người mới bắt đầu' : 
         selectedLevel === 'intermediate' ? 'Trung cấp' : 
         selectedLevel === 'advanced' ? 'Nâng cao' : selectedLevel) :
        selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1);
      criteriaText.push(levelDisplay);
    }
    if (selectedDay) {
      const dayDisplay = currentLang === 'vi' ? 
        (selectedDay === 'monday' ? 'Thứ Hai' :
         selectedDay === 'tuesday' ? 'Thứ Ba' :
         selectedDay === 'wednesday' ? 'Thứ Tư' :
         selectedDay === 'thursday' ? 'Thứ Năm' :
         selectedDay === 'friday' ? 'Thứ Sáu' :
         selectedDay === 'saturday' ? 'Thứ Bảy' :
         selectedDay === 'sunday' ? 'Chủ Nhật' : selectedDay) :
        selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1);
      criteriaText.push(dayDisplay);
    }
    
    const criteriaDisplay = criteriaText.length > 0 ? 
      ` - ${criteriaText.join(', ')}` : '';
    
    const resultsList = `
      <div class="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 rounded">
        <p class="dark:text-green-200 text-green-700 font-medium">${foundText}${criteriaDisplay}</p>
      </div>
      <div class="grid gap-4">
        ${results.map(item => `
          <a href="${item.permalink}" class="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
            <div class="flex items-start justify-between">
              <div class="flex-1">
                <h3 class="text-lg font-semibold dark:text-white text-gray-900 mb-2">
                  ${item.title}
                </h3>
                ${item.description ? `
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    ${item.description}
                  </p>
                ` : ''}
                <div class="flex flex-wrap gap-2">
                  ${item.level ? `
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      ${item.level.charAt(0).toUpperCase() + item.level.slice(1)}
                    </span>
                  ` : ''}
                  ${item.day ? `
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      ${item.day.charAt(0).toUpperCase() + item.day.slice(1)}
                    </span>
                  ` : ''}
                  ${item.time ? `
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      ${item.time}
                    </span>
                  ` : ''}
                </div>
              </div>
              <div class="ml-4">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </a>
        `).join('')}
      </div>
    `;
    
    resultsContainer.innerHTML = resultsList;
  }
  
  // Perform initial search to show all classes
  performSearch();
});
</script>
{{ end }}