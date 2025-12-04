\"use client\";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Lock,
  User as UserIcon,
  Phone,
  MapPin,
  Scroll,
  Calendar,
  Briefcase,
  GraduationCap,
  Ruler,
  Users,
  Camera,
} from "lucide-react";

interface AuthProps {
  onAuthComplete: (user: any) => void;
}

export function Auth({ onAuthComplete }: AuthProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState<'credentials' | 'photo' | 'personal' | 'professional' | 'community' | 'verification'>('credentials');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    photo: '',
    gender: '',
    dob: '',
    height: '',
    maritalStatus: '',
    education: '',
    profession: '',
    workExperience: '',
    gothram: '',
    nakshatram: '',
    nativePlace: ''
  });
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [photoPreview, setPhotoPreview] = useState<string>('');

  const calculateAge = (dob: string) => {
    if (!dob) return 0;
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleCredentialsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Mock login
      const userData = {
        id: '1',
        name: 'Demo User',
        email: formData.email,
        verified: true,
        profileComplete: 65
      };
      onAuthComplete(userData);
    } else {
      setStep('photo');
    }
  };

  const handlePhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('personal');
  };

  const handlePersonalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('professional');
  };

  const handleProfessionalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('community');
  };

  const handleCommunitySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('verification');
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock verification
    const userData = {
      id: '1',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender,
      age: calculateAge(formData.dob),
      dob: formData.dob,
      height: formData.height,
      maritalStatus: formData.maritalStatus,
      education: formData.education,
      profession: formData.profession,
      workExperience: formData.workExperience,
      gothram: formData.gothram,
      nakshatram: formData.nakshatram,
      nativePlace: formData.nativePlace,
      verified: true,
      profileComplete: 85
    };
    onAuthComplete(userData);
  };

  return (
    <div className="fixed inset-0 bg-[#F5F3F0] overflow-auto">
      <div className="min-h-full flex flex-col items-center justify-center p-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="mb-2 tracking-[0.3em] text-[#1A1A1A]">CHATTADA</h1>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
              <span className="text-[#6B6B6B] tracking-[0.2em] text-xs uppercase">Private Community</span>
            </div>
            <p className="text-[#1A1A1A]">
              Lineage <span className="text-[#D4AF37] italic">Meets</span> Love.
            </p>
          </div>

          {/* Progress Indicator */}
          {!isLogin && step !== 'credentials' && (
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-[#6B6B6B] text-sm">
                  Step {step === 'photo' ? '1' : step === 'personal' ? '2' : step === 'professional' ? '3' : step === 'community' ? '4' : '5'} of 5
                </span>
                <span className="text-[#6B6B6B] text-sm">
                  {step === 'photo' ? 'Photo' : step === 'personal' ? 'Personal' : step === 'professional' ? 'Professional' : step === 'community' ? 'Community' : 'Verification'}
                </span>
              </div>
              <div className="w-full bg-white border border-[#E8E6E3] rounded-full h-2 overflow-hidden">
                <div
                  className="bg-[#D4AF37] h-2 rounded-full transition-all"
                  style={{ 
                    width: step === 'photo' ? '20%' : step === 'personal' ? '40%' : step === 'professional' ? '60%' : step === 'community' ? '80%' : '100%' 
                  }}
                ></div>
              </div>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-[#E8E6E3] rounded-3xl p-8 shadow-xl"
          >
            {/* Credentials Step */}
            {step === 'credentials' && (
              <>
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setIsLogin(true)}
                    className={`flex-1 py-2 rounded-lg transition-all ${
                      isLogin ? 'bg-[#1A1A1A] text-white' : 'text-[#6B6B6B] hover:bg-[#F5F3F0]'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setIsLogin(false)}
                    className={`flex-1 py-2 rounded-lg transition-all ${
                      !isLogin ? 'bg-[#1A1A1A] text-white' : 'text-[#6B6B6B] hover:bg-[#F5F3F0]'
                    }`}
                  >
                    Sign Up
                  </button>
                </div>

                <form onSubmit={handleCredentialsSubmit} className="space-y-4">
                  {!isLogin && (
                    <div>
                      <label className="block text-[#1A1A1A] mb-2">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={20} />
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 border border-[#E8E6E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white text-[#1A1A1A]"
                          placeholder="Enter your full name"
                          required={!isLogin}
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-[#1A1A1A] mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={20} />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-[#E8E6E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white text-[#1A1A1A]"
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                  </div>

                  {!isLogin && (
                    <div>
                      <label className="block text-[#1A1A1A] mb-2">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={20} />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 border border-[#E8E6E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white text-[#1A1A1A]"
                          placeholder="Enter your email"
                          required={!isLogin}
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-[#1A1A1A] mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={20} />
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-[#E8E6E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white text-[#1A1A1A]"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>

                  {isLogin && (
                    <div className="text-right">
                      <button type="button" className="text-[#D4AF37] hover:text-[#B8941F]">
                        Forgot Password?
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1A1A1A] text-white rounded-xl hover:bg-[#2A2A2A] transition-all shadow-lg"
                  >
                    {isLogin ? 'Sign In' : 'Continue'}
                  </button>
                </form>
              </>
            )}

            {/* Photo Step */}
            {step === 'photo' && (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-[#1A1A1A] mb-2">Upload Your Photo</h2>
                  <p className="text-[#6B6B6B] text-sm">Add a photo to your profile</p>
                </div>
                <form onSubmit={handlePhotoSubmit} className="space-y-6">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setFormData({ ...formData, photo: file.name });
                            setPhotoPreview(URL.createObjectURL(file));
                          }
                        }}
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-10"
                        id="photo-upload"
                        required
                      />
                      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#E8E6E3] bg-[#F5F3F0] flex items-center justify-center relative">
                        {photoPreview ? (
                          <img src={photoPreview} alt="Profile preview" className="w-full h-full object-cover" />
                        ) : (
                          <UserIcon className="text-[#6B6B6B]" size={60} strokeWidth={1.5} />
                        )}
                      </div>
                      <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center border-4 border-white shadow-lg cursor-pointer hover:bg-[#B8941F] transition-colors">
                        <Camera size={20} className="text-[#1A1A1A]" />
                      </div>
                    </div>
                    <p className="text-[#6B6B6B] text-sm mt-4 text-center">
                      {photoPreview ? 'Tap to change photo' : 'Tap to upload photo'}
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep('credentials')}
                      className="flex-1 py-3 border border-[#E8E6E3] rounded-xl text-[#1A1A1A] hover:bg-[#F5F3F0] transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#1A1A1A] text-white rounded-xl hover:bg-[#2A2A2A] transition-all shadow-lg"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Personal Details Step */}
            {step === 'personal' && (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-[#1A1A1A] mb-2">Personal Information</h2>
                  <p className="text-[#6B6B6B] text-sm">Help us know you better</p>
                </div>
                <form onSubmit={handlePersonalSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[#1A1A1A] mb-2">Gender</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, gender: 'male' })}
                        className={`py-3 px-4 rounded-xl border-2 transition-all ${
                          formData.gender === 'male' 
                            ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#1A1A1A]' 
                            : 'border-[#E8E6E3] text-[#6B6B6B] hover:border-[#D4AF37]/50'
                        }`}
                      >
                        Male
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, gender: 'female' })}
                        className={`py-3 px-4 rounded-xl border-2 transition-all ${
                          formData.gender === 'female' 
                            ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#1A1A1A]' 
                            : 'border-[#E8E6E3] text-[#6B6B6B] hover:border-[#D4AF37]/50'
                        }`}
                      >
                        Female
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#1A1A1A] mb-2">Date of Birth</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B] pointer-events-none" size={20} />
                      <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-[#E8E6E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white text-[#1A1A1A] cursor-pointer"
                        max={new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]}
                        placeholder="Select your date of birth"
                        required
                      />
                    </div>
                    {formData.dob && (
                      <p className="text-[#D4AF37] text-sm mt-1">Age: {calculateAge(formData.dob)} years</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[#1A1A1A] mb-2">Height</label>
                    <div className="relative">
                      <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={20} />
                      <select
                        value={formData.height}
                        onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-[#E8E6E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white text-[#1A1A1A]"
                        required
                      >
                        <option value="">Select Height</option>
                        <option value="4ft6in">4&apos;6&quot;</option>
                        <option value="4ft8in">4&apos;8&quot;</option>
                        <option value="4ft10in">4&apos;10&quot;</option>
                        <option value="5ft0in">5&apos;0&quot;</option>
                        <option value="5ft2in">5&apos;2&quot;</option>
                        <option value="5ft4in">5&apos;4&quot;</option>
                        <option value="5ft6in">5&apos;6&quot;</option>
                        <option value="5ft8in">5&apos;8&quot;</option>
                        <option value="5ft10in">5&apos;10&quot;</option>
                        <option value="6ft0in">6&apos;0&quot;</option>
                        <option value="6ft2in">6&apos;2&quot;</option>
                        <option value="6ft4in">6&apos;4&quot;</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#1A1A1A] mb-2">Marital Status</label>
                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={20} />
                      <select
                        value={formData.maritalStatus}
                        onChange={(e) => setFormData({ ...formData, maritalStatus: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-[#E8E6E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white text-[#1A1A1A]"
                        required
                      >
                        <option value="">Select Status</option>
                        <option value="never_married">Never Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep('photo')}
                      className="flex-1 py-3 border border-[#E8E6E3] rounded-xl text-[#1A1A1A] hover:bg-[#F5F3F0] transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#1A1A1A] text-white rounded-xl hover:bg-[#2A2A2A] transition-all shadow-lg"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Professional Details Step */}
            {step === 'professional' && (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-[#1A1A1A] mb-2">Professional Background</h2>
                  <p className="text-[#6B6B6B] text-sm">Tell us about your career</p>
                </div>
                <form onSubmit={handleProfessionalSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[#1A1A1A] mb-2">Education</label>
                    <div className="relative">
                      <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={20} />
                      <select
                        value={formData.education}
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-[#E8E6E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white text-[#1A1A1A]"
                        required
                      >
                        <option value="">Select Education</option>
                        <option value="high_school">High School</option>
                        <option value="bachelors">Bachelor's Degree</option>
                        <option value="masters">Master's Degree</option>
                        <option value="doctorate">Doctorate</option>
                        <option value="diploma">Diploma</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#1A1A1A] mb-2">Profession</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={20} />
                      <input
                        type="text"
                        value={formData.profession}
                        onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-[#E8E6E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white text-[#1A1A1A]"
                        placeholder="e.g. Software Engineer, Doctor, Teacher"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#1A1A1A] mb-2">Work Experience</label>
                    <select
                      value={formData.workExperience}
                      onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
                      className="w-full px-4 py-3 border border-[#E8E6E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white text-[#1A1A1A]"
                      required
                    >
                      <option value="">Select Experience</option>
                      <option value="fresher">Fresher</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep('personal')}
                      className="flex-1 py-3 border border-[#E8E6E3] rounded-xl text-[#1A1A1A] hover:bg-[#F5F3F0] transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#1A1A1A] text-white rounded-xl hover:bg-[#2A2A2A] transition-all shadow-lg"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Community Details Step */}
            {step === 'community' && (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-[#1A1A1A] mb-2">Heritage & Lineage</h2>
                  <p className="text-[#6B6B6B] text-sm">Connect with your roots</p>
                </div>
                <form onSubmit={handleCommunitySubmit} className="space-y-4">
                  <div>
                    <label className="block text-[#1A1A1A] mb-2">Gothram</label>
                    <div className="relative">
                      <Scroll className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={20} />
                      <input
                        type="text"
                        value={formData.gothram}
                        onChange={(e) => setFormData({ ...formData, gothram: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-[#E8E6E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white text-[#1A1A1A]"
                        placeholder="Enter your Gothram"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#1A1A1A] mb-2">Nakshatram</label>
                    <div className="relative">
                      <Scroll className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={20} />
                      <input
                        type="text"
                        value={formData.nakshatram}
                        onChange={(e) => setFormData({ ...formData, nakshatram: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-[#E8E6E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white text-[#1A1A1A]"
                        placeholder="Enter your Nakshatram"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#1A1A1A] mb-2">Native Place</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={20} />
                      <input
                        type="text"
                        value={formData.nativePlace}
                        onChange={(e) => setFormData({ ...formData, nativePlace: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 border border-[#E8E6E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-white text-[#1A1A1A]"
                        placeholder="Enter your native place"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep('professional')}
                      className="flex-1 py-3 border border-[#E8E6E3] rounded-xl text-[#1A1A1A] hover:bg-[#F5F3F0] transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-[#1A1A1A] text-white rounded-xl hover:bg-[#2A2A2A] transition-all shadow-lg"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* OTP Verification Step */}
            {step === 'verification' && (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#D4AF37]">
                    <Phone className="text-[#D4AF37]" size={32} />
                  </div>
                  <h3 className="mb-2 text-[#1A1A1A]">Verify Your Number</h3>
                  <p className="text-[#6B6B6B]">
                    We've sent a 6-digit OTP to<br />
                    <span className="text-[#1A1A1A]">{formData.phone}</span>
                  </p>
                </div>

                <form onSubmit={handleVerificationSubmit} className="space-y-6">
                  <div className="flex gap-2 justify-center">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        maxLength={1}
                        className="w-12 h-12 text-center text-[#1A1A1A] border-2 border-[#E8E6E3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                      />
                    ))}
                  </div>

                  <div className="text-center">
                    <p className="text-[#6B6B6B]">
                      Didn't receive the code?{' '}
                      <button type="button" className="text-[#D4AF37] hover:text-[#B8941F]">
                        Resend OTP
                      </button>
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#1A1A1A] text-white rounded-xl hover:bg-[#2A2A2A] transition-all shadow-lg"
                  >
                    Verify & Continue
                  </button>
                </form>
              </>
            )}
          </motion.div>

          <p className="text-center text-[#6B6B6B] mt-6">
            By continuing, you agree to our Terms & Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}