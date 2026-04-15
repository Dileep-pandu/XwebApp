import { Component, signal, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('br-services');

  isScrolled = false;
  menuOpen = false;
  formSubmitted = false;

  civilServices = [
    { icon: '🧱', title: 'Block Wall Works', desc: 'Solid masonry block wall construction for partitions, boundary walls, and structural elements.' },
    { icon: '🪣', title: 'Tiling & Flooring', desc: 'Supply and installation of ceramic, porcelain, and natural stone tiles for floors and walls.' },
    { icon: '🎨', title: 'Painting Works', desc: 'Interior and exterior painting using premium quality paints with flawless surface preparation.' },
    { icon: '💧', title: 'Waterproofing', desc: 'Expert waterproofing for roofs, basements, bathrooms, and wet areas to prevent leakage.' },
    { icon: '🏗️', title: 'Plastering & Rendering', desc: 'Smooth plastering, skimming, and rendering for perfect wall and ceiling finishes.' },
    { icon: '🪟', title: 'Gypsum & False Ceiling', desc: 'Gypsum board partitions and suspended ceilings with custom designs and finish.' },
  ];

  emServices = [
    { icon: '❄️', title: 'AC Installation', desc: 'Supply, installation, testing and commissioning of split, ducted, and VRF air conditioning systems.' },
    { icon: '⚡', title: 'Electrical Panels', desc: 'Installation of main and sub distribution boards, MCBs, RCDs, and protection devices.' },
    { icon: '🔌', title: 'Cables & Wiring', desc: 'Full electrical wiring, cable pulling, termination, and cable tray installation works.' },
    { icon: '💡', title: 'Sockets & Lighting', desc: 'Installation of power points, switches, light fittings, and control systems throughout the building.' },
    { icon: '🔧', title: 'Mechanical Works', desc: 'Ventilation fans, exhaust systems, and mechanical equipment installation and maintenance.' },
    { icon: '🔍', title: 'Testing & Commissioning', desc: 'Comprehensive testing, inspection, and commissioning of all installed MEP systems.' },
  ];

  plumbingServices = [
    { icon: '🚿', title: 'Sanitary Fixtures', desc: 'Supply and installation of WC, wash basins, bathtubs, urinals, and all sanitary fittings.' },
    { icon: '🪠', title: 'Drainage Systems', desc: 'PVC and CI pipe installation for kitchen drains, floor drains, and toilet waste lines.' },
    { icon: '🚰', title: 'Water Supply Lines', desc: 'Hot and cold water supply pipe works using PPR and CPVC piping systems.' },
    { icon: '🏠', title: 'Kitchen Drain Works', desc: 'Complete kitchen sink drain, grease trap, and under-counter pipe installation.' },
    { icon: '🛁', title: 'Toilet Works', desc: 'Full toilet fitout including concealed cisterns, flush valves, and sanitary accessories.' },
    { icon: '🔩', title: 'Pipe Maintenance', desc: 'Leak detection, pipe repair, re-piping, and preventive maintenance for all plumbing systems.' },
  ];

  whyUs = [
    { icon: '🏆', title: 'Proven Track Record', desc: 'Over 200 successfully completed projects across residential, commercial, and industrial sectors.' },
    { icon: '👷', title: 'Skilled Workforce', desc: 'A team of certified engineers, supervisors, and skilled tradesmen committed to quality workmanship.' },
    { icon: '⏱️', title: 'On-Time Delivery', desc: 'We respect your schedule. Our project management ensures milestones are met without compromise.' },
    { icon: '✅', title: 'Quality Assurance', desc: 'All materials and work are subject to rigorous quality checks aligned with international standards.' },
    { icon: '💰', title: 'Competitive Pricing', desc: 'Transparent and competitive pricing with detailed breakdowns — no hidden costs, ever.' },
    { icon: '📞', title: '24/7 Support', desc: 'Dedicated after-service support and emergency response for all our clients.' },
  ];

  projectsList = [
    {
      title: 'Residential Villa – Civil & MEP',
      desc: 'Complete civil, electrical, and plumbing works for a 4-bedroom villa.',
      category: 'Civil & MEP',
      location: 'Jumeirah, Dubai',
      svg: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="40" width="100" height="35" rx="2" fill="#1a3a5c" opacity="0.7"/><polygon points="60,5 5,42 115,42" fill="#c8a96e" opacity="0.8"/><rect x="45" y="55" width="20" height="20" fill="#0a2540"/><rect x="15" y="50" width="15" height="12" fill="#2a5f9e" opacity="0.6"/><rect x="90" y="50" width="15" height="12" fill="#2a5f9e" opacity="0.6"/></svg>`
    },
    {
      title: 'Office Block – Electrical Panels',
      desc: 'Main LV distribution board and sub-panel installations across 5 floors.',
      category: 'Electromechanical',
      location: 'Business Bay, Dubai',
      svg: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="10" width="80" height="65" rx="2" fill="#1a3a5c" opacity="0.7"/><rect x="28" y="18" width="16" height="20" fill="#2a5f9e" opacity="0.7"/><rect x="52" y="18" width="16" height="20" fill="#2a5f9e" opacity="0.7"/><rect x="76" y="18" width="16" height="20" fill="#2a5f9e" opacity="0.7"/><rect x="28" y="46" width="16" height="20" fill="#2a5f9e" opacity="0.7"/><rect x="52" y="46" width="16" height="20" fill="#2a5f9e" opacity="0.7"/><rect x="76" y="46" width="16" height="20" fill="#2a5f9e" opacity="0.7"/><circle cx="36" cy="28" r="4" fill="#f0a500"/><circle cx="60" cy="28" r="4" fill="#f0a500"/><circle cx="84" cy="28" r="4" fill="#f0a500"/></svg>`
    },
    {
      title: 'Hotel – AC & Plumbing',
      desc: 'VRF system installation and full sanitary works for a boutique hotel.',
      category: 'MEP & Plumbing',
      location: 'Deira, Dubai',
      svg: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="90" height="62" rx="2" fill="#1a3a5c" opacity="0.6"/><rect x="15" y="15" width="90" height="15" fill="#c8a96e" opacity="0.5"/><rect x="22" y="38" width="12" height="10" fill="#2a5f9e" opacity="0.7"/><rect x="42" y="38" width="12" height="10" fill="#2a5f9e" opacity="0.7"/><rect x="62" y="38" width="12" height="10" fill="#2a5f9e" opacity="0.7"/><rect x="82" y="38" width="12" height="10" fill="#2a5f9e" opacity="0.7"/><rect x="22" y="56" width="12" height="10" fill="#2a5f9e" opacity="0.7"/><rect x="42" y="56" width="12" height="10" fill="#2a5f9e" opacity="0.7"/><rect x="48" y="35" width="24" height="37" fill="#0a2540"/></svg>`
    },
    {
      title: 'Warehouse – Tiling & Waterproofing',
      desc: 'Industrial floor tiling and complete roof waterproofing system.',
      category: 'Civil Works',
      location: 'Al Quoz, Dubai',
      svg: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="30" width="110" height="45" rx="2" fill="#1a3a5c" opacity="0.6"/><polygon points="60,5 5,32 115,32" fill="#c8a96e" opacity="0.5"/><line x1="5" y1="55" x2="115" y2="55" stroke="#c8a96e" stroke-width="1.5" opacity="0.4"/><line x1="37" y1="30" x2="37" y2="75" stroke="#c8a96e" stroke-width="1.5" opacity="0.4"/><line x1="72" y1="30" x2="72" y2="75" stroke="#c8a96e" stroke-width="1.5" opacity="0.4"/><rect x="48" y="50" width="24" height="25" fill="#0a2540"/></svg>`
    },
    {
      title: 'Apartment Complex – Full MEP',
      desc: 'Electrical, AC, and plumbing installations for a 12-unit apartment building.',
      category: 'Full MEP',
      location: 'Al Barsha, Dubai',
      svg: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="5" width="60" height="72" rx="2" fill="#1a3a5c" opacity="0.7"/><rect x="5" y="25" width="28" height="52" rx="2" fill="#1a3a5c" opacity="0.5"/><rect x="87" y="25" width="28" height="52" rx="2" fill="#1a3a5c" opacity="0.5"/><rect x="37" y="12" width="10" height="8" fill="#2a5f9e" opacity="0.7"/><rect x="55" y="12" width="10" height="8" fill="#2a5f9e" opacity="0.7"/><rect x="73" y="12" width="10" height="8" fill="#2a5f9e" opacity="0.7"/><rect x="37" y="28" width="10" height="8" fill="#2a5f9e" opacity="0.7"/><rect x="55" y="28" width="10" height="8" fill="#2a5f9e" opacity="0.7"/><rect x="73" y="28" width="10" height="8" fill="#2a5f9e" opacity="0.7"/><rect x="50" y="55" width="20" height="22" fill="#0a2540"/></svg>`
    },
    {
      title: 'Villa – Painting & Plastering',
      desc: 'Interior and exterior painting with skim coat plastering for 6-bedroom villa.',
      category: 'Civil Works',
      location: 'Mirdif, Dubai',
      svg: `<svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="35" width="100" height="42" rx="2" fill="#c8a96e" opacity="0.3"/><polygon points="60,5 5,38 115,38" fill="#1a3a5c" opacity="0.5"/><rect x="45" y="52" width="30" height="25" fill="#1a3a5c" opacity="0.6"/><rect x="20" y="48" width="18" height="14" fill="#2a5f9e" opacity="0.4"/><rect x="82" y="48" width="18" height="14" fill="#2a5f9e" opacity="0.4"/><rect x="28" y="20" width="6" height="10" fill="#c8a96e" opacity="0.7"/><path d="M28 20 Q31 14 34 20" fill="#c8a96e" opacity="0.7"/></svg>`
    },
  ];

  testimonials = [
    {
      text: 'BR Engineering handled the complete MEP works for our villa project. Exceptional quality, on time, and the team was very professional throughout. Highly recommend!',
      name: 'Ahmed Al Mansouri',
      role: 'Property Developer, Dubai',
      initials: 'AA'
    },
    {
      text: 'We engaged BR Engineering for the AC and electrical works in our hotel. The commissioning was smooth and the after-service support is outstanding.',
      name: 'Rajesh Kumar',
      role: 'Hotel Facilities Manager',
      initials: 'RK'
    },
    {
      text: 'The tiling and waterproofing work done by BR Engineering on our warehouse is impeccable. No issues after 2 years — highly skilled team.',
      name: 'Sarah Johnson',
      role: 'Operations Director',
      initials: 'SJ'
    },
  ];

  ngOnInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 60;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.formSubmitted = true;
    setTimeout(() => { this.formSubmitted = false; }, 4000);
  }
}
